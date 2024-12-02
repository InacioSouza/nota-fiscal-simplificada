package com.nota.sistemanf.entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SequenciaNota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int ultimoNumero;
    private String para;

    public SequenciaNota() {

    }

    public SequenciaNota(int ultimoNumero, String para) {
        this.ultimoNumero = ultimoNumero;
        this.para = para;
    }

    public int getUltimoNumero() {
        return ultimoNumero;
    }

    public void setUltimoNumero(int ultimoNumero) {
        this.ultimoNumero = ultimoNumero;
    }

    public String getPara() {
        return para;
    }

    public void setPara(String para) {
        this.para = para;
    }

    public void incrementa() {
        this.ultimoNumero++;
    }

}
