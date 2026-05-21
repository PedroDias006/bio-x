AtividadeColetiva.java
package pm_prova2;

public class AtividadeColetiva extends Atividade {
    public AtividadeColetiva(String nome, int duracao, int maxPart, double valor, StatusAtividade status) {
        super(nome, duracao, maxPart, valor, status);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Atividade Coletiva: " + getNome() + " | Status: " + getStatus());
    }

    @Override
    public boolean atividadeColetiva() {
        return true;
    }
}

AtividadeIndividual.java
package pm_prova2;

public class AtividadeIndividual extends Atividade {
    public AtividadeIndividual(String nome, int duracao, int maxPart, double valor, StatusAtividade status) {
        super(nome, duracao, maxPart, valor, status);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Atividade Individual: " + getNome() + " | Status: " + getStatus());
    }

    @Override
    public boolean atividadeColetiva() {
        return false;
    }
}

PlanoBasico.java
package pm_prova2;

public class PlanoBasico extends Plano {
    public PlanoBasico(String nome, double valor, int maxAtiv, StatusPlano status) {
        super(nome, valor, maxAtiv, status);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Básico: " + getNome() + " | Valor: R$" + getValorMensal());
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return false;
    }
}

PlanoPremium.java
package pm_prova2;

public class PlanoPremium extends Plano {
    public PlanoPremium(String nome, double valor, int maxAtiv, StatusPlano status) {
        super(nome, valor, maxAtiv, status);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Premium: " + getNome() + " | Valor: R$" + getValorMensal());
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return true;
    }
}

PM_Prova2.java
package pm_prova2;

import java.util.ArrayList;

public class PM_Prova2 {
    public static void main(String[] args) {
        // Criando instâncias
        ArrayList<Atividade> atividades = new ArrayList<>();
        atividades.add(new AtividadeColetiva("Yoga", 60, 20, 150.0, StatusAtividade.ATIVA));
        atividades.add(new AtividadeIndividual("Musculação", 90, 1, 100.0, StatusAtividade.ATIVA));

        ArrayList<Plano> planos = new ArrayList<>();
        planos.add(new PlanoBasico("Plano Light", 80.0, 5, StatusPlano.ATIVO));
        planos.add(new PlanoPremium("Plano Gold", 250.0, 50, StatusPlano.ATIVO));

        // Exibindo dados (Polimorfismo)
        System.out.println("--- Lista de Atividades ---");
        for (Atividade a : atividades) {
            a.exibirDetalhes();
        }

        System.out.println("\n--- Lista de Planos ---");
        for (Plano p : planos) {
            p.exibirDetalhes();
        }
    }
}

