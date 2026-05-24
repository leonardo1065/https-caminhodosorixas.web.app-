/**
 * PAINEL DE CONTROLE - CAMINHO DOS ORIXÁS
 * 
 * Altere as informações abaixo para atualizar o site semanalmente.
 * EMOJIS RECOMENDADOS: Oxalá 🕊️ | Pombagira 🌹 | Exús 🔱 ou 🎩 | Iansã 🌪️ | Xangô ⚖️ | Ogum ⚔️ | Cura 💚
 */

const SITE_DATA = {
    // Configuração das Giras (Exibidas na seção "Próximas Giras")
    giras: [
        { 
            dia: "Segunda-feira dia 25/05", 
            hora: "20:00", 
            titulo: "Gira de Exús Pombagiras e Mirins,Laroyê", 
            icone: "🕯️",
            cor: "" 
        },
        { 
            dia: "Quarta-feira", 
            hora: "20:00", 
            titulo: " Dia 20/05 Tratamento de Cura", 
            icone: "💚", 
            cor: "text-emerald-500",
            aviso: "⚠️ Para quem irá pela primeira vez, é necessário passar em atendimento (Gira) nas Segundas-Feiras." 
        },
        { 
            dia: "", 
            hora: "Consulte", 
            titulo: "a definir", 
            icone: "❤️", 
            cor: "text-red-600" 
        }
    ],

    // Configuração da História (Exibida na seção "Nossa História")
    historia: {
        texto: [
            "O Centro Espírita de Umbanda Caminho dos Orixás nasceu de um chamado para a caridade e para o auxílio espiritual sob a luz dos Orixás e das entidades de Umbanda.",
            "Nossa missão é acolher a todos, sem distinção, proporcionando um ambiente de paz, aprendizado e evolução espiritual através dos passes, orientações e do trabalho incansável de nossos médiuns.",
            "Sob a proteção de Oxalá, seguimos firmes no propósito de espalhar o amor e a sabedoria ancestral da nossa religião."
        ]
    },

    // Dados dos Orixás para a Galeria
    orixas: [
        { 
            nome: 'Oxalá', 
            path: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600', 
            cor: '#FFFFFF', 
            saudacao: 'Epa Babá!',
            cores: 'Branco',
            elemento: 'Ar e Criação',
            descricao: 'O Orixá maior, senhor da criação e da paz. Representa o equilíbrio, a pureza e a sabedoria suprema.' 
        },
        { 
            nome: 'Iemanjá', 
            path: 'img/iemanja.png', 
            cor: '#00BFFF', 
            saudacao: 'Odoyá!',
            cores: 'Azul claro e Branco',
            elemento: 'Mar e Águas Salgadas',
            descricao: 'Rainha do mar e mãe de quase todos os Orixás. Rege a família, a cabeça e o equilíbrio emocional.' 
        },
        { 
            nome: 'Ogum', 
            path: 'img/ogum.png', 
            cor: '#1E90FF', 
            saudacao: 'Ogunhê!',
            cores: 'Azul escuro ou Verde',
            elemento: 'Ferro e Caminhos',
            descricao: 'Senhor dos caminhos, do ferro e da guerra. O guerreiro que abre as estradas com sua espada e coragem.' 
        },
        { 
            nome: 'Oxóssi', 
            path: 'img/oxossi.png', 
            cor: '#006400', 
            saudacao: 'Okê Arô!',
            cores: 'Verde',
            elemento: 'Matas e Fartura',
            descricao: 'O caçador de uma flecha só. Senhor das matas, do conhecimento e da fartura.' 
        },
        { 
            nome: 'Xangô', 
            path: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&q=80&w=600', 
            cor: '#B22222', 
            saudacao: 'Kawó Kabiyèsilé!',
            cores: 'Marrom',
            elemento: 'Fogo e Pedreiras',
            descricao: 'Rei da justiça e do equilíbrio. Senhor dos raios e trovões, rege o fogo, as leis e a autoridade.' 
        },
        { 
            nome: 'Iansã', 
            path: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=600', 
            cor: '#FF4500', 
            saudacao: 'Eparrey!',
            cores: 'Amarelo',
            elemento: 'Ventos e Tempestades',
            descricao: 'Senhora dos ventos e tempestades. Guerreira valente que rege os raios e os espíritos dos mortos.' 
        },
        { 
            nome: 'Oxum', 
            path: 'img/oxum.png', 
            cor: '#FFD700', 
            saudacao: 'Ora Yê Yê Ô!',
            cores: 'Amarelo e Dourado',
            elemento: 'Águas Doces (Rios e Cachoeiras)',
            descricao: 'Rainha das águas doces, do ouro e do amor. Senhora da fertilidade e da beleza, que rege as emoções.' 
        },
        { 
            nome: 'Nanã', 
            path: 'img/nana.png', 
            cor: '#4B0082', 
            saudacao: 'Saluba Nanã!',
            cores: 'Roxo e Lilás',
            elemento: 'Barro e Pântanos',
            descricao: 'A Orixá mais velha, senhora da sabedoria, do barro e dos pântanos. Rege a maternidade e a ancestralidade.' 
        },
        { 
            nome: 'Obaluaê', 
            path: 'img/obaluae.png', 
            cor: '#8B4513', 
            saudacao: 'Atotô!',
            cores: 'Preto e Branco',
            elemento: 'Terra e Cura',
            descricao: 'Senhor da cura e das doenças. Coberto por palha da costa, traz o mistério da transformação e a força da terra.' 
        },
        { 
            nome: 'Exú', 
            path: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=600', 
            cor: '#000000', 
            saudacao: 'Laroyê Exu!',
            cores: 'Preto e Vermelho',
            elemento: 'Encruzilhadas e Comunicação',
            descricao: 'O mensageiro entre os homens e os Orixás. Senhor dos caminhos, da comunicação e da vitalidade.' 
        },
        { 
            nome: 'Pomba Gira', 
            path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600', 
            cor: '#8B0000', 
            saudacao: 'Laroyê Pomba Gira!',
            cores: 'Vermelho e Preto',
            elemento: 'Caminhos e Desejo',
            descricao: 'Entidade feminina que representa a força do desejo, da feminilidade, da liberdade e do empoderamento. Guardiã dos caminhos do amor e da sensualidade.' 
        },
        { 
            nome: 'Oxumaré', 
            path: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600', 
            cor: '#32CD32', 
            saudacao: 'Arroboboi!',
            cores: 'Cores do Arco-íris',
            elemento: 'Renovação e Ciclos',
            descricao: 'O senhor do arco-íris e da serpente. Rege os ciclos, a renovação e a riqueza da terra.' 
        }
    ],
    
    // Configurações de Contato
    contato: {
        whatsapp: "551125911667", // Apenas números com código do país e DDD
        whatsappDisplay: "(11) 2591-1667",
        email: "caminhodosorixas2026@gmail.com",
        endereco: "Rua Sérgio Cardoso, 506 — Jd. Sto Estefano, São Paulo/SP",
        instagram: "caminhodosorixass",
        mapsLink: "https://www.google.com/maps/search/?api=1&query=-23.627500,-46.625100" // Link com coordenadas para maior precisão
    }
};
