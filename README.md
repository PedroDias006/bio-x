Atividade.java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pm_prova2;

/**
 *
 * @author glbra
 */
public abstract class Atividade {

    private String nome;
    private int duracaoAula;
    private int quantidadeMaximaParticipantes;
    private double valorMensal;
    private StatusAtividade status;

    public Atividade(String nome,
                     int duracaoAula,
                     int quantidadeMaximaParticipantes,
                     double valorMensal,
                     StatusAtividade status) {

        this.nome = nome;
        this.duracaoAula = duracaoAula;
        this.quantidadeMaximaParticipantes = quantidadeMaximaParticipantes;
        this.valorMensal = valorMensal;
        this.status = status;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getDuracaoAula() {
        return duracaoAula;
    }

    public void setDuracaoAula(int duracaoAula) {
        this.duracaoAula = duracaoAula;
    }

    public int getQuantidadeMaximaParticipantes() {
        return quantidadeMaximaParticipantes;
    }

    public void setQuantidadeMaximaParticipantes(int quantidadeMaximaParticipantes) {
        this.quantidadeMaximaParticipantes = quantidadeMaximaParticipantes;
    }

    public double getValorMensal() {
        return valorMensal;
    }

    public void setValorMensal(double valorMensal) {
        this.valorMensal = valorMensal;
    }

    public StatusAtividade getStatus() {
        return status;
    }

    public void setStatus(StatusAtividade status) {
        this.status = status;
    }

    public abstract void exibirDetalhes();

    public abstract boolean atividadeColetiva();
}
   



Plano.java

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
   

PM_Prova2.java

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pm_prova2;

/**
 *
 * @author glbra
 */
public class PM_Prova2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    }
    
}


StatusAtividade.java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package pm_prova2;

/**
 *
 * @author glbra
 */
public enum StatusAtividade {
    ATIVA,
    LOTADA,
    INATIVA
    
}

StatusPlano.java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package pm_prova2;

/**
 *
 * @author glbra
 */
public enum StatusPlano {
    ATIVO,
    SUSPENSO,
    CANCELADO
    
}
