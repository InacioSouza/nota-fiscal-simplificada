package com.nota.sistemanf.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.nota.sistemanf.entidades.SequenciaNota;

public interface SequenciaNotaRepository extends PagingAndSortingRepository<SequenciaNota, Integer> {
    SequenciaNota findByIgnoreCasePara(String para);
}
