package com.gapsi.repository;

import com.gapsi.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {
    boolean existsByNameIgnoreCase(String name);
}
