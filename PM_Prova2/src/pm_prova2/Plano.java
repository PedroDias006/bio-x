/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pm_prova2;

/**
 *
 * @author glbra
 */
public abstract class Plano {

    private String nome;
    private double valorMensal;
    private int quantidadeMaximaAtividades;
    private StatusPlano status;

    public Plano(String nome,
                 double valorMensal,
                 int quantidadeMaximaAtividades,
                 StatusPlano status) {

        this.nome = nome;
        this.valorMensal = valorMensal;
        this.quantidadeMaximaAtividades = quantidadeMaximaAtividades;
        this.status = status;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getValorMensal() {
        return valorMensal;
    }

    public void setValorMensal(double valorMensal) {
        this.valorMensal = valorMensal;
    }

    public int getQuantidadeMaximaAtividades() {
        return quantidadeMaximaAtividades;
    }

    public void setQuantidadeMaximaAtividades(int quantidadeMaximaAtividades) {
        this.quantidadeMaximaAtividades = quantidadeMaximaAtividades;
    }

    public StatusPlano getStatus() {
        return status;
    }

    public void setStatus(StatusPlano status) {
        this.status = status;
    }

    public abstract void exibirDetalhes();

    public abstract boolean permiteAtividadeColetiva();
}
   
