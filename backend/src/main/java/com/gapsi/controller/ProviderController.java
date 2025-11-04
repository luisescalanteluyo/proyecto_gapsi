package com.gapsi.controller;

import com.gapsi.model.Provider;
import com.gapsi.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProviderController {
    private final ProviderService service;
    private final Environment env;

    @Autowired
    public ProviderController(ProviderService service, Environment env) {
        this.service = service;
        this.env = env;
    }

    @GetMapping("/welcome")
    public Map<String, String> welcome() {
        String message = env.getProperty("app.welcome", "Bienvenido Candidato 01");
        String version = env.getProperty("app.version", "1.0.0");
        return Map.of("message", message, "version", version);
    }

    @GetMapping("/providers")
    public Page<Provider> getProviders(@RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "10") int size) {
        return service.list(page, size);
    }

    @PostMapping("/providers")
    public ResponseEntity<Provider> createProvider(@Valid @RequestBody Provider provider) {
        Provider saved = service.create(provider);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @DeleteMapping("/providers/{id}")
    public ResponseEntity<Void> deleteProvider(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
