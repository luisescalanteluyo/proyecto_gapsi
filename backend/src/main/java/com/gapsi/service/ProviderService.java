package com.gapsi.service;

import com.gapsi.exception.DuplicateResourceException;
import com.gapsi.exception.ResourceNotFoundException;
import com.gapsi.model.Provider;
import com.gapsi.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {
    private final ProviderRepository repository;

    @Autowired
    public ProviderService(ProviderRepository repository) {
        this.repository = repository;
    }

    public Page<Provider> list(int page, int size) {
        return repository.findAll(PageRequest.of(page, size, Sort.by("id").ascending()));
    }

    public Provider create(Provider provider) {
        if (repository.existsByNameIgnoreCase(provider.getName())) {
            throw new DuplicateResourceException("Proveedor ya existe con nombre: " + provider.getName());
        }
        return repository.save(provider);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Proveedor no encontrado con id: " + id);
        }
        repository.deleteById(id);
    }
}
