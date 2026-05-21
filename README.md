Certificavel.java
package pm_prova2;

public interface Certificavel {
    void emitirCertificado(String nomeParticipante);
}

ControladorPresenca.java
package pm_prova2;

public interface ControladorPresenca {
    void registrarPresenca(String nomeParticipante);
}

Musculacao.java
package pm_prova2;

public class Musculacao extends Atividade {
    private int quantidadeAparelhos;
    private String horario;

    public Musculacao(String nome, int duracaoAula, int quantidadeMaximaParticipantes, double valorMensal, 
                      StatusAtividade status, int quantidadeAparelhos, String horario) {
        super(nome, duracaoAula, quantidadeMaximaParticipantes, valorMensal, status);
        this.quantidadeAparelhos = quantidadeAparelhos;
        this.horario = horario;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Musculação: " + getNome() + " | Horário: " + horario + 
                           " | Aparelhos: " + quantidadeAparelhos + " | Status: " + getStatus());
    }

    @Override
    public boolean atividadeColetiva() {
        return false; // Musculação é atividade individual
    }
}

Natacao.java
package pm_prova2;

public class Natacao extends Atividade implements Certificavel, ControladorPresenca {
    private double profundidadePiscina;
    private String horario;

    public Natacao(String nome, int duracaoAula, int quantidadeMaximaParticipantes, double valorMensal, 
                   StatusAtividade status, double profundidadePiscina, String horario) {
        super(nome, duracaoAula, quantidadeMaximaParticipantes, valorMensal, status);
        this.profundidadePiscina = profundidadePiscina;
        this.horario = horario;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Natação: " + getNome() + " | Horário: " + horario + 
                           " | Profundidade: " + profundidadePiscina + "m | Status: " + getStatus());
    }

    @Override
    public boolean atividadeColetiva() {
        return false; // Pode ser tratada como individual ou coletiva; adotamos individual para caber no Plano Básico.
    }

    @Override
    public void emitirCertificado(String nomeParticipante) {
        System.out.println("[CERTIFICADO] O aluno " + nomeParticipante + " concluiu o curso de Natação!");
    }

    @Override
    public void registrarPresenca(String nomeParticipante) {
        System.out.println("[PRESENÇA] Aluno " + nomeParticipante + " marcou presença na Natação.");
    }
}

Spinning.java
package pm_prova2;

public class Spinning extends Atividade implements ControladorPresenca {
    private int quantidadeBicicletas;
    private String horario;

    public Spinning(String nome, int duracaoAula, int quantidadeMaximaParticipantes, double valorMensal, 
                    StatusAtividade status, int quantidadeBicicletas, String horario) {
        super(nome, duracaoAula, quantidadeMaximaParticipantes, valorMensal, status);
        this.quantidadeBicicletas = quantidadeBicicletas;
        this.horario = horario;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Spinning: " + getNome() + " | Horário: " + horario + 
                           " | Bicicletas: " + quantidadeBicicletas + " | Status: " + getStatus());
    }

    @Override
    public boolean atividadeColetiva() {
        return true; // Spinning é atividade coletiva
    }

    @Override
    public void registrarPresenca(String nomeParticipante) {
        System.out.println("[PRESENÇA] Aluno " + nomeParticipante + " marcou presença no Spinning.");
    }
}

PlanoBasico.java
package pm_prova2;
import java.util.ArrayList;
import java.util.List;

public class PlanoBasico extends Plano implements ControladorPresenca {
    private List<Atividade> atividadesAssociadas;

    public PlanoBasico(String nome, double valorMensal, int quantidadeMaximaAtividades, StatusPlano status) {
        super(nome, valorMensal, quantidadeMaximaAtividades, status);
        this.atividadesAssociadas = new ArrayList<>();
    }

    public boolean associarAtividade(Atividade atividade) {
        if (atividadesAssociadas.size() >= getQuantidadeMaximaAtividades()) {
            System.out.println("Erro: Limite de atividades atingido no plano " + getNome());
            return false;
        }
        if (atividade.atividadeColetiva()) {
            System.out.println("Erro: O Plano Básico permite apenas atividades individuais.");
            return false;
        }
        atividadesAssociadas.add(atividade);
        System.out.println("Sucesso: " + atividade.getNome() + " vinculada ao plano " + getNome());
        return true;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Básico: " + getNome() + " | Status: " + getStatus());
        for (Atividade a : atividadesAssociadas) {
            System.out.println("   - " + a.getNome());
        }
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return false; [span_11](start_span)// Permite apenas atividades individuais[span_11](end_span)
    }

    @Override
    public void registrarPresenca(String nomeParticipante) {
        System.out.println("[CATRACA] Acesso diário registrado para: " + nomeParticipante + " (Plano Básico)");
    }
}

PlanoPremium.java
package pm_prova2;
import java.util.ArrayList;
import java.util.List;

public class PlanoPremium extends Plano {
    private List<Atividade> atividadesAssociadas;

    public PlanoPremium(String nome, double valorMensal, int quantidadeMaximaAtividades, StatusPlano status) {
        super(nome, valorMensal, quantidadeMaximaAtividades, status);
        this.atividadesAssociadas = new ArrayList<>();
    }

    public boolean associarAtividade(Atividade atividade) {
        if (atividadesAssociadas.size() >= getQuantidadeMaximaAtividades()) {
            System.out.println("Erro: Limite de atividades atingido no plano " + getNome());
            return false;
        }
        atividadesAssociadas.add(atividade);
        System.out.println("Sucesso: " + atividade.getNome() + " vinculada ao plano " + getNome());
        return true;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Premium: " + getNome() + " | Status: " + getStatus());
        for (Atividade a : atividadesAssociadas) {
            System.out.println("   - " + a.getNome());
        }
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return true; [span_12](start_span)// Acesso ilimitado[span_12](end_span)
    }
}

PM_Prova2.java
package pm_prova2;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class PM_Prova2 {

    private static List<Atividade> listaAtividades = new ArrayList<>();
    private static List<Plano> listaPlanos = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        inicializarDados(); [span_16](start_span)// Carrega 3 atividades e 2 planos sem interação[span_16](end_span)
        
        int opcao = 0;
        while (opcao != 8) {
            System.out.println("\n=== SISTEMA ACADEMIA ===");
            System.out.println("1. Associar atividade a um plano");
            System.out.println("2. Exibir todas as atividades");
            System.out.println("3. Exibir todos os planos");
            System.out.println("4. Exibir apenas planos ativos");
            System.out.println("5. Emitir certificado");
            System.out.println("6. Registrar presença");
            System.out.println("7. Remover atividades inativas");
            System.out.println("8. Sair");
            System.out.print("Escolha: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Limpar buffer

            switch (opcao) {
                case 1:
                    associarAtividadePlano(scanner);
                    break;
                case 2:
                    exibirAtividades();
                    break;
                case 3:
                    exibirPlanos(false);
                    break;
                case 4:
                    exibirPlanos(true);
                    break;
                case 5:
                    emitirCertificados(scanner);
                    break;
                case 6:
                    registrarPresencas(scanner);
                    break;
                case 7:
                    removerAtividadesInativas();
                    break;
                case 8:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        }
        scanner.close();
    }

    [span_17](start_span)// Método obrigatório pelo enunciado[span_17](end_span)
    private static void inicializarDados() {
        listaAtividades.add(new Musculacao("Musculação Manhã", 60, 20, 100.0, StatusAtividade.ATIVA, 30, "07:00"));
        listaAtividades.add(new Natacao("Natação Adulto", 45, 10, 150.0, StatusAtividade.ATIVA, 2.5, "18:00"));
        listaAtividades.add(new Spinning("Spinning Noturno", 50, 15, 120.0, StatusAtividade.INATIVA, 15, "19:00"));

        listaPlanos.add(new PlanoBasico("Básico Padrão", 90.0, 2, StatusPlano.ATIVO));
        listaPlanos.add(new PlanoPremium("Premium Gold", 200.0, 5, StatusPlano.ATIVO));
        System.out.println("Dados iniciais carregados com sucesso.");
    }

    [span_18](start_span)// Funcionalidade 1[span_18](end_span)
    private static void associarAtividadePlano(Scanner sc) {
        System.out.println("Escolha o Plano (Índice):");
        for (int i = 0; i < listaPlanos.size(); i++) {
            System.out.println(i + ". " + listaPlanos.get(i).getNome());
        }
        int idPlano = sc.nextInt();

        System.out.println("Escolha a Atividade (Índice):");
        for (int i = 0; i < listaAtividades.size(); i++) {
            System.out.println(i + ". " + listaAtividades.get(i).getNome());
        }
        int idAtiv = sc.nextInt();

        Plano planoSelecionado = listaPlanos.get(idPlano);
        Atividade ativSelecionada = listaAtividades.get(idAtiv);

        // Verifica a instância para utilizar o método específico da subclasse
        if (planoSelecionado instanceof PlanoBasico) {
            ((PlanoBasico) planoSelecionado).associarAtividade(ativSelecionada);
        } else if (planoSelecionado instanceof PlanoPremium) {
            ((PlanoPremium) planoSelecionado).associarAtividade(ativSelecionada);
        }
    }

    [span_19](start_span)// Funcionalidade 2[span_19](end_span)
    private static void exibirAtividades() {
        System.out.println("\n--- ATIVIDADES CADASTRADAS ---");
        for (Atividade a : listaAtividades) {
            a.exibirDetalhes();
        }
    }

    [span_20](start_span)// Funcionalidades 3 e 4[span_20](end_span)
    private static void exibirPlanos(boolean apenasAtivos) {
        System.out.println("\n--- PLANOS ---");
        for (Plano p : listaPlanos) {
            if (!apenasAtivos || p.getStatus() == StatusPlano.ATIVO) {
                p.exibirDetalhes();
            }
        }
    }

    [span_21](start_span)// Funcionalidade 5[span_21](end_span)
    private static void emitirCertificados(Scanner sc) {
        System.out.print("Nome do Aluno para o certificado: ");
        String nome = sc.nextLine();
        boolean achou = false;
        
        for (Atividade a : listaAtividades) {
            if (a instanceof Certificavel) {
                ((Certificavel) a).emitirCertificado(nome);
                achou = true;
            }
        }
        if (!achou) System.out.println("Nenhuma atividade emissora de certificado encontrada.");
    }

    [span_22](start_span)// Funcionalidade 6[span_22](end_span)
    private static void registrarPresencas(Scanner sc) {
        System.out.print("Nome do Aluno para registrar presença: ");
        String nome = sc.nextLine();

        // Registrando em Atividades
        for (Atividade a : listaAtividades) {
            if (a instanceof ControladorPresenca) {
                ((ControladorPresenca) a).registrarPresenca(nome);
            }
        }
        [span_23](start_span)// Registrando em Planos (Plano Básico precisa de controle)[span_23](end_span)
        for (Plano p : listaPlanos) {
            if (p instanceof ControladorPresenca) {
                ((ControladorPresenca) p).registrarPresenca(nome);
            }
        }
    }

    [span_24](start_span)// Funcionalidade 7[span_24](end_span)
    private static void removerAtividadesInativas() {
        Iterator<Atividade> iterator = listaAtividades.iterator();
        int cont = 0;
        while (iterator.hasNext()) {
            Atividade a = iterator.next();
            if (a.getStatus() == StatusAtividade.INATIVA) {
                iterator.remove();
                cont++;
            }
        }
        System.out.println(cont + " atividade(s) inativa(s) removida(s).");
    }
}

package pm_prova2;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class PM_Prova2 {

    // Essas duas linhas abaixo estavam faltando no seu!
    private static List<Atividade> listaAtividades = new ArrayList<>();
    private static List<Plano> listaPlanos = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        inicializarDados(); 
        
        int opcao = 0;
        while (opcao != 8) {
            System.out.println("\n=== SISTEMA ACADEMIA ===");
            System.out.println("1. Associar atividade a um plano");
            System.out.println("2. Exibir todas as atividades");
            System.out.println("3. Exibir todos os planos");
            System.out.println("4. Exibir apenas planos ativos");
            System.out.println("5. Emitir certificado");
            System.out.println("6. Registrar presença");
            System.out.println("7. Remover atividades inativas");
            System.out.println("8. Sair");
            System.out.print("Escolha: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); 

            switch (opcao) {
                case 1:
                    associarAtividadePlano(scanner);
                    break;
                case 2:
                    exibirAtividades();
                    break;
                case 3:
                    exibirPlanos(false);
                    break;
                case 4:
                    exibirPlanos(true);
                    break;
                case 5:
                    emitirCertificados(scanner);
                    break;
                case 6:
                    registrarPresencas(scanner);
                    break;
                case 7:
                    removerAtividadesInativas();
                    break;
                case 8:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        }
        scanner.close();
    }

    private static void inicializarDados() {
        listaAtividades.add(new Musculacao("Musculação Manhã", 60, 20, 100.0, StatusAtividade.ATIVA, 30, "07:00"));
        listaAtividades.add(new Natacao("Natação Adulto", 45, 10, 150.0, StatusAtividade.ATIVA, 2.5, "18:00"));
        listaAtividades.add(new Spinning("Spinning Noturno", 50, 15, 120.0, StatusAtividade.INATIVA, 15, "19:00"));

        listaPlanos.add(new PlanoBasico("Básico Padrão", 90.0, 2, StatusPlano.ATIVO));
        listaPlanos.add(new PlanoPremium("Premium Gold", 200.0, 5, StatusPlano.ATIVO));
        System.out.println("Dados iniciais carregados com sucesso.");
    }

    // --- DAQUI PRA BAIXO ERAM OS MÉTODOS QUE ESTAVAM FALTANDO ---

    private static void associarAtividadePlano(Scanner sc) {
        System.out.println("Escolha o Plano (Índice):");
        for (int i = 0; i < listaPlanos.size(); i++) {
            System.out.println(i + ". " + listaPlanos.get(i).getNome());
        }
        int idPlano = sc.nextInt();

        System.out.println("Escolha a Atividade (Índice):");
        for (int i = 0; i < listaAtividades.size(); i++) {
            System.out.println(i + ". " + listaAtividades.get(i).getNome());
        }
        int idAtiv = sc.nextInt();

        Plano planoSelecionado = listaPlanos.get(idPlano);
        Atividade ativSelecionada = listaAtividades.get(idAtiv);

        if (planoSelecionado instanceof PlanoBasico) {
            ((PlanoBasico) planoSelecionado).associarAtividade(ativSelecionada);
        } else if (planoSelecionado instanceof PlanoPremium) {
            ((PlanoPremium) planoSelecionado).associarAtividade(ativSelecionada);
        }
    }

    private static void exibirAtividades() {
        System.out.println("\n--- ATIVIDADES CADASTRADAS ---");
        for (Atividade a : listaAtividades) {
            a.exibirDetalhes();
        }
    }

    private static void exibirPlanos(boolean apenasAtivos) {
        System.out.println("\n--- PLANOS ---");
        for (Plano p : listaPlanos) {
            if (!apenasAtivos || p.getStatus() == StatusPlano.ATIVO) {
                p.exibirDetalhes();
            }
        }
    }

    private static void emitirCertificados(Scanner sc) {
        System.out.print("Nome do Aluno para o certificado: ");
        String nome = sc.nextLine();
        boolean achou = false;
        
        for (Atividade a : listaAtividades) {
            if (a instanceof Certificavel) {
                ((Certificavel) a).emitirCertificado(nome);
                achou = true;
            }
        }
        if (!achou) System.out.println("Nenhuma atividade emissora de certificado encontrada.");
    }

    private static void registrarPresencas(Scanner sc) {
        System.out.print("Nome do Aluno para registrar presença: ");
        String nome = sc.nextLine();

        for (Atividade a : listaAtividades) {
            if (a instanceof ControladorPresenca) {
                ((ControladorPresenca) a).registrarPresenca(nome);
            }
        }
        for (Plano p : listaPlanos) {
            if (p instanceof ControladorPresenca) {
                ((ControladorPresenca) p).registrarPresenca(nome);
            }
        }
    }

    private static void removerAtividadesInativas() {
        Iterator<Atividade> iterator = listaAtividades.iterator();
        int cont = 0;
        while (iterator.hasNext()) {
            Atividade a = iterator.next();
            if (a.getStatus() == StatusAtividade.INATIVA) {
                iterator.remove();
                cont++;
            }
        }
        System.out.println(cont + " atividade(s) inativa(s) removida(s).");
    }
}

package pm_prova2;
import java.util.ArrayList;
import java.util.List;

public class PlanoBasico extends Plano implements ControladorPresenca {
    private List<Atividade> atividadesAssociadas;

    public PlanoBasico(String nome, double valorMensal, int quantidadeMaximaAtividades, StatusPlano status) {
        super(nome, valorMensal, quantidadeMaximaAtividades, status);
        this.atividadesAssociadas = new ArrayList<>();
    }

    public boolean associarAtividade(Atividade atividade) {
        if (atividadesAssociadas.size() >= getQuantidadeMaximaAtividades()) {
            System.out.println("Erro: Limite de atividades atingido no plano " + getNome());
            return false;
        }
        if (atividade.atividadeColetiva()) {
            System.out.println("Erro: O Plano Básico permite apenas atividades individuais.");
            return false;
        }
        atividadesAssociadas.add(atividade);
        System.out.println("Sucesso: " + atividade.getNome() + " vinculada ao plano " + getNome());
        return true;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Básico: " + getNome() + " | Status: " + getStatus());
        for (Atividade a : atividadesAssociadas) {
            System.out.println("   - " + a.getNome());
        }
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return false;
    }

    @Override
    public void registrarPresenca(String nomeParticipante) {
        System.out.println("[CATRACA] Acesso diário registrado para: " + nomeParticipante + " (Plano Básico)");
    }
}

package pm_prova2;
import java.util.ArrayList;
import java.util.List;

public class PlanoPremium extends Plano {
    private List<Atividade> atividadesAssociadas;

    public PlanoPremium(String nome, double valorMensal, int quantidadeMaximaAtividades, StatusPlano status) {
        super(nome, valorMensal, quantidadeMaximaAtividades, status);
        this.atividadesAssociadas = new ArrayList<>();
    }

    public boolean associarAtividade(Atividade atividade) {
        if (atividadesAssociadas.size() >= getQuantidadeMaximaAtividades()) {
            System.out.println("Erro: Limite de atividades atingido no plano " + getNome());
            return false;
        }
        atividadesAssociadas.add(atividade);
        System.out.println("Sucesso: " + atividade.getNome() + " vinculada ao plano " + getNome());
        return true;
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Plano Premium: " + getNome() + " | Status: " + getStatus());
        for (Atividade a : atividadesAssociadas) {
            System.out.println("   - " + a.getNome());
        }
    }

    @Override
    public boolean permiteAtividadeColetiva() {
        return true;
    }
}


