package com.nota.sistemanf.services;

import org.springframework.stereotype.Service;

import com.nota.sistemanf.entidades.SequenciaNota;
import com.nota.sistemanf.repository.SequenciaNotaRepository;

@Service
public class GeraNumero {

    public int gerar(SequenciaNotaRepository seqNotaRepo) {
        SequenciaNota seqNota = seqNotaRepo.findByIgnoreCasePara("incremento");
        seqNota.incrementa();
        seqNota = seqNotaRepo.save(seqNota);

        return seqNota.getUltimoNumero();
    }
}
