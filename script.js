const INITIAL_DATA = [
    {
      "prioridade": "Normal",
      "conteudo": "Descrição topzeira",
      "local": "algum lugar",
      "recursos": "1, 2",
      "data": "52034-02-03",
      "matricula": "2025306238",
      "id": "c70a6bdd-4f5e-4580-ba08-6b62e70be6c3"
    },
    {
      "prioridade": "Normal",
      "conteudo": "Descrição topzeira",
      "local": "algum lugar",
      "recursos": [
        [
          " ,"
        ],
        [
          " ,"
        ]
      ],
      "data": "275760-03-02",
      "matricula": "2025306238",
      "id": "a2b51dad-da52-42b5-93d3-a264c9ff3cb2"
    },
    {
      "prioridade": "Normal",
      "conteudo": "Descrição topzeira",
      "local": "Algum lugar",
      "recursos": [
        "1",
        "2",
        "a",
        "b"
      ],
      "data": "1654-03-02",
      "matricula": "2025306238",
      "id": "5de0c659-8eff-45f8-889e-8b73b9a40184"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "Descrição topzeira",
      "local": "Algum lugar",
      "recursos": [
        "a",
        "2"
      ],
      "data": "1654-04-03",
      "matricula": "2025306238",
      "id": "bb0034ce-69f8-4dbd-82cf-d7d092337fa7"
    },
    {
      "prioridade": "Normal",
      "conteudo": "Teste para edição de tarefa",
      "local": "local legal",
      "recursos": [
        "a",
        "d"
      ],
      "data": "46521-06-05",
      "matricula": "2025306238",
      "id": "1c92dad2-87df-4de0-b086-302e86cdd80a"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "Teste para edição de tarefa",
      "local": "Local legal",
      "recursos": [
        "a",
        "vb"
      ],
      "data": "4651-05-06",
      "matricula": "2025306238",
      "id": "f32cd7fb-6439-4d09-8d6f-6a14b1344406"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "Teste edição de tarefa criada por mim",
      "local": "Local legal",
      "recursos": [
        "a",
        "v"
      ],
      "data": "4165-03-02",
      "matricula": "2025306238",
      "id": "76034c96-e8df-4abe-aee9-bed03e6d186a"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "Teste edição de tarefas",
      "local": "Local legal",
      "recursos": [
        "2",
        "3",
        "a"
      ],
      "data": "15654-03-02",
      "matricula": "2025306238",
      "id": "ade18953-2aaf-47e8-9c0e-688aeb72f0b3"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "Teste edição de tarefa",
      "local": "Local legal",
      "recursos": [
        "s",
        "1"
      ],
      "data": "4564-06-05",
      "matricula": "2025306238",
      "id": "06e25402-c5ac-4813-a71f-375a286cfed0"
    },
    {
      "prioridade": "Normal",
      "conteudo": "Teste edição tarefas",
      "local": "local legal",
      "recursos": [
        "2",
        "a"
      ],
      "data": "1556-03-02",
      "matricula": "2025306238",
      "id": "ba090102-884f-4f31-983f-06047ffddb9e"
    },
    {
      "prioridade": "Normal",
      "descricao": "atividade do bitucs",
      "local": "excola",
      "recursosNecessarios": [
        "computador",
        "coisax"
      ],
      "dataLimite": "NaN-NaN-NaN NaN:NaN:NaN",
      "matricula": 12344322456,
      "id": "5c795bdf-244b-40f3-8288-a3222e32c49c"
    },
    {
      "prioridade": "",
      "descricao": "asdsa",
      "local": "dsadsad",
      "recursosNecessarios": [
        "asdda"
      ],
      "dataLimite": "6777-05-23",
      "matricula": "545679007653",
      "id": "2a27aea8-55f1-433f-86bf-bdc3e57471fb"
    },
    {
      "prioridade": "Normal",
      "conteudo": "Teste edicaoa aaaaaaaaaaaaaa naoa aguento masi",
      "local": "local maneiro",
      "recursos": [
        "a",
        "haja paciencia"
      ],
      "data": "4565-03-02",
      "matricula": "2025306238",
      "id": "000e6f18-c791-4a99-bef3-bb98decfc99d"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "a",
      "local": "a",
      "recursos": [
        "a",
        "a"
      ],
      "data": "275760-05-31",
      "matricula": "2025306238",
      "id": "37140cbf-d553-4151-b2bf-88b532d6b639"
    },
    {
      "prioridade": "Normal",
      "descricao": "fdadasdasda",
      "local": "inferno federal catarinense",
      "recursosNecessarios": [],
      "dataLimite": "NaN-NaN-NaN NaN:NaN:NaN",
      "matricula": 1231321231313,
      "id": "3c5fc38d-e0da-4ae4-8e26-4caa1e8886fa"
    },
    {
      "prioridade": "Normal",
      "conteudo": "top",
      "local": "sim",
      "recursos": [
        "oi",
        "tchau"
      ],
      "data": "275760-03-02",
      "matricula": "2025306238",
      "id": "57d2fd26-6370-409c-93bc-347cf528f584"
    },
    {
      "prioridade": "Baixa",
      "descricao": "oigab",
      "local": "do lado do gab",
      "recursosNecessarios": [
        "sim"
      ],
      "dataLimite": "2025-11-29",
      "matricula": "122134567890",
      "id": "57881579-9c12-4aa4-8391-b7524f9fdd68"
    },
    {
      "prioridade": "Normal",
      "descricao": "qewssa",
      "local": "casa do bituca",
      "recursosNecessarios": [
        "12"
      ],
      "dataLimite": "2312-03-12 12:23:00",
      "matricula": 1231231321231,
      "id": "d400d741-3744-40ba-948a-bf4d8674afda"
    },
    {
      "prioridade": "Normal",
      "descricao": "vinicini",
      "local": "piscina",
      "recursosNecessarios": [
        "oioioio"
      ],
      "dataLimite": "32444-02-11",
      "matricula": "22443332",
      "id": "1581067a-bb73-4b6f-bc3a-c787ba2a4e41"
    },
    {
      "prioridade": "Normal",
      "conteudo": "asd",
      "local": "asdasd",
      "recursos": [
        "asdas",
        "asdasda"
      ],
      "data": "1234-02-03",
      "matricula": "2025306238",
      "id": "3978386e-fa5d-48d4-b6b1-20ddac29629d"
    },
    {
      "prioridade": "",
      "descricao": "ysgfdsfs",
      "local": "fdsubdwquh",
      "recursosNecessarios": [
        "fesuygfea",
        "fduhfefe"
      ],
      "dataLimite": "4444-12-12",
      "matricula": "732567259",
      "id": "537c1d93-1d14-4d5d-b98b-df4339c0cf70"
    },
    {
      "prioridade": "Baixa",
      "descricao": "sfdsfdf",
      "local": "fasfad",
      "recursosNecessarios": [
        "3421414",
        "2141414",
        "4124141"
      ],
      "dataLimite": "NaN-NaN-NaN NaN:NaN:NaN",
      "matricula": 2143141414,
      "id": "3043f6b8-db3f-465a-9ee4-f7d47cc6b794"
    },
    {
      "prioridade": "Normal",
      "conteudo": "teste data",
      "local": "local legal",
      "recursos": [
        "sim",
        "nao"
      ],
      "data": "03-12-1983 12:07",
      "matricula": "20253062668",
      "id": "4b95211d-407d-4ba8-bd68-e54d0bf2e53b"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "dsad",
      "local": "as",
      "recursos": [
        "s",
        "a",
        "1"
      ],
      "data": "03/12/1983 09:15",
      "matricula": "2025306238",
      "id": "d5ff29d6-fa7d-4936-97c0-3e54577d74cd"
    },
    {
      "prioridade": "Baixa",
      "descricao": "asdad",
      "local": "adssad",
      "recursosNecessarios": [
        "12345678"
      ],
      "dataLimite": "5678-04-22 21:00:00",
      "matricula": 2345678,
      "id": "f3e9ef34-626b-427d-b696-8b46539e375e"
    },
    {
      "prioridade": "Normal",
      "descricao": "asdadad",
      "local": "asdadadsa",
      "recursosNecessarios": [
        "2133",
        "23131"
      ],
      "dataLimite": "4533-03-11 21:00:00",
      "matricula": 241313,
      "id": "a59763df-e9ee-477c-a0fd-f54ac31754ec"
    },
    {
      "prioridade": "Normal",
      "conteudo": "TEste scripts separados",
      "local": "locao",
      "recursos": [
        "s",
        "1"
      ],
      "data": "02/03/4654 21:59",
      "matricula": "2025306238",
      "id": "94739314-8812-49c4-83e7-83d979856ed8"
    },
    {
      "prioridade": "Normal",
      "conteudo": "teste",
      "local": "teste",
      "recursos": [
        "teste",
        "teste"
      ],
      "data": "03/12/1983 05:59",
      "matricula": "2025306238",
      "id": "e4fbdf02-a6e5-4398-8d40-ccd96385605c"
    },
    {
      "prioridade": "Normal",
      "conteudo": "teste",
      "local": "teste",
      "recursos": [
        "teste",
        "teste"
      ],
      "data": "NaN/NaN/NaN NaN:NaN",
      "matricula": "2025306238",
      "id": "c69fd356-5b90-4652-b8aa-716dd9ca4e0d"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "sa",
      "local": "sa",
      "recursos": [
        "sa",
        "sa"
      ],
      "data": "NaN/NaN/NaN NaN:NaN",
      "matricula": "21465",
      "id": "2cb55295-0a01-4b00-8202-0ce9dd5fb4ea"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "s",
      "local": "s",
      "recursos": [
        "s",
        "s"
      ],
      "data": "03/12/2025 03:58",
      "matricula": "2025306238",
      "id": "d6f0cc9a-da95-431a-a0eb-49b312b360c3"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "Teste",
      "local": "Teste",
      "recursos": [
        "Teste",
        "Teste"
      ],
      "data": "03/02/2025 12:35",
      "matricula": "2025306238",
      "id": "b61b51f9-40c4-424c-936c-5da156117991"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "Teste scripts separados tava uma bagunça",
      "local": "Algum local legal",
      "recursos": [
        "asdsadads",
        "asdsadads"
      ],
      "data": "03/12/2025 12:59",
      "matricula": "2025306238",
      "id": "0b778730-57da-4f9b-947b-bff080ef8d54"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "Teste scripts separados tava uma bagunça",
      "local": "Algum local legal",
      "recursos": [
        "asdsadads",
        "asdsadads"
      ],
      "data": "NaN/NaN/NaN NaN:NaN",
      "matricula": "2025306238",
      "id": "0ecf7040-65f5-4aba-a1a7-33a909e0ff3d"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "Teste scripts separados 2 tava uma bagunça",
      "local": "Algum local legal",
      "recursos": [
        "asdsadads",
        "asdsadads"
      ],
      "data": "03/12/2025 12:59",
      "matricula": "2025306238",
      "id": "39cd0965-9add-4494-ae5d-bada95e78b69"
    },
    {
      "prioridade": "Urgente",
      "conteudo": "nada",
      "local": "concordia",
      "recursos": [
        {
          "nome": "peixe"
        },
        {
          "nome": "frigideira"
        },
        {
          "nome": "oleo"
        }
      ],
      "data": "2025-12-01",
      "matricula": "1234567890",
      "id": "6c1e5a63-13b2-4b93-a76d-a31056763a3d"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "0987",
      "local": "asdgfh",
      "recursos": [
        {
          "nome": "098765"
        },
        {
          "nome": "098765"
        }
      ],
      "data": "2025-12-03",
      "matricula": "123456",
      "id": "f6a855c4-fdeb-458b-95f0-4af6d8045f59"
    },
    {
      "prioridade": "urgente",
      "descricao": "Trabalho DW1",
      "local": "IFC",
      "recursosNecessarios": [],
      "dataLimite": "2025-12-04",
      "matricula": "2025306597",
      "id": "2a611d8a-f3c6-4147-bb1d-44caa4d28688"
    },
    {
      "prioridade": "urgente",
      "descricao": "trabalho DW1",
      "local": "IFC",
      "recursosNecessarios": [
        "Css"
      ],
      "dataLimite": "2025-12-04",
      "matricula": "2025306597",
      "id": "608a5fd9-6155-48ee-b3cf-940bddd202fb"
    },
    {
      "prioridade": "urgente",
      "descricao": "dw1",
      "local": "ifc",
      "recursosNecessarios": [
        "css"
      ],
      "dataLimite": "2025-12-04",
      "matricula": "2313",
      "id": "f7beba05-74ef-43c3-a381-7caab6840e79"
    },
    {
      "prioridade": "urgente",
      "descricao": "dw1",
      "local": "ifc",
      "recursosNecessarios": [],
      "dataLimite": "2025-12-04",
      "matricula": "2313",
      "id": "b8cd5cd9-70ae-4b6a-a354-9a228ec540ca"
    },
    {
      "prioridade": "baixa",
      "descricao": "dw1",
      "local": "ifc",
      "recursosNecessarios": [
        "312"
      ],
      "dataLimite": "2025-12-04",
      "matricula": "123234",
      "id": "b38ed5c8-75ba-4267-b185-51fe9a78df90"
    },
    {
      "prioridade": "um",
      "descricao": "ifc",
      "local": "wwwwd",
      "recursosNecessarios": [
        "231"
      ],
      "dataLimite": "24318-10-07",
      "matricula": "23131",
      "id": "2facedf4-801c-4c8d-98dd-42577886e543"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Dw1",
      "local": "ifc",
      "recursosNecessarios": [
        "computador",
        "vontade"
      ],
      "dataLimite": "2025-12-04",
      "matricula": "21",
      "id": "a252cfb0-83e7-4ec2-8077-5aa4bf7e8fc0"
    },
    {
      "prioridade": "Normal",
      "descricao": "dw2",
      "local": "dqwd",
      "recursosNecessarios": [
        "css"
      ],
      "dataLimite": "81247-03-02",
      "matricula": "202313",
      "id": "319e31d1-b574-499f-9f33-f7a6622bf84e"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Dw1",
      "local": "ifc",
      "recursosNecessarios": [
        "css"
      ],
      "dataLimite": "2025-12-04",
      "matricula": "123",
      "id": "269b3fe2-3347-4b0b-885f-4d0fe2a558f0"
    },
    {
      "prioridade": "Urgente",
      "descricao": "dw2",
      "local": "ifc",
      "recursosNecessarios": [
        "3213"
      ],
      "dataLimite": "12112-03-21",
      "matricula": "3423",
      "id": "23d2cc39-a82a-412c-bf44-4f7ca04aeecb"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Teste final",
      "local": "ifc",
      "recursosNecessarios": [
        "css",
        "html",
        "js",
        "vontade"
      ],
      "dataLimite": "2020-12-04",
      "matricula": "231",
      "id": "d53d8f41-8b42-4e2f-b01c-31f6cdadb677"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "teste",
      "local": "Algum local legal",
      "recursos": [
        "asdsadads",
        "asdadasd"
      ],
      "data": "03/12/2202 12:35",
      "matricula": "2025306238",
      "id": "2d723353-7f1b-4652-ac7c-c7a9c7df9076"
    },
    {
      "prioridade": "Baixa",
      "conteudo": "teste popup",
      "local": "Algum local legal",
      "recursos": [
        "asdsadads",
        "asdsadads"
      ],
      "data": "03/12/2025 12:35",
      "matricula": "2025306238",
      "id": "26e25bfa-df4a-4d9e-ab28-f061c4855162"
    },
    {
      "prioridade": "Normal",
      "descricao": "Trabalho DW",
      "local": "IFC",
      "recursosNecessarios": "Internet",
      "dataLimite": "2025-12-04 00:00:00",
      "matricula": "1214424141",
      "id": "3f108493-1540-4c79-b670-e274024c07d3"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Trabalho DW",
      "local": "IFC",
      "recursosNecessarios": "Internet",
      "dataLimite": "2025-12-04",
      "matricula": "20313910491",
      "id": "7f8b6e9c-0c61-43af-818b-c9ffcc1cdf7c"
    },
    {
      "prioridade": "Normal",
      "descricao": "Trabalho dw",
      "local": "IFC",
      "recursosNecessarios": "",
      "dataLimite": "2025-12-04",
      "matricula": "12314142124",
      "id": "25565889-ea7e-403c-92d6-f2c101980d06"
    },
    {
      "prioridade": "Baixa",
      "descricao": "Trabalho dw",
      "local": "IFC",
      "recursosNecessarios": "",
      "dataLimite": "2025-12-04",
      "matricula": "12123141241",
      "id": "80dd060d-1d68-4f2f-a8b8-6c04fed20f65"
    },
    {
      "prioridade": "Normal",
      "descricao": "Trabalho DW",
      "local": "IFC",
      "recursosNecessarios": "Internet",
      "dataLimite": "2025-12-04",
      "matricula": "1214141241",
      "id": "7125531e-c330-478a-9b45-10d726c26cbb"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Trabalho DW",
      "local": "IFC",
      "recursosNecessarios": "Internet",
      "dataLimite": "2025-12-04",
      "matricula": "12314124124",
      "id": "fe2c4a30-f355-41a6-8284-8e51fec3069f"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Trabalho DW",
      "local": "IFC",
      "recursosNecessarios": "Internet, PC",
      "dataLimite": "2025-12-04",
      "matricula": "095840584",
      "id": "a840f6b9-a9d3-4cc3-9196-824780ff74dd"
    },
    {
      "prioridade": "Urgente",
      "descricao": "Alguma tarefa aí",
      "local": "IFC",
      "recursosNecessarios": [
        "lapis",
        "borracha",
        "caderno",
        "computador",
        "vontade",
        "paciencia",
        "soco ingles",
        "canivete"
      ],
      "dataLimite": "2100-01-01",
      "matricula": "2025315101",
      "id": "55d79e8d-85c0-46ab-880b-72387a984299"
    },
    {
      "prioridade": "Urgente",
      "descricao": "aniversario do arga",
      "local": "sim",
      "recursosNecessarios": [
        "rifle da segunda guerra mundial",
        "armadura completa de titânio",
        "garrafa de cavalo branco cheia"
      ],
      "dataLimite": "2025-12-21T10:58",
      "matricula": "2025304046",
      "id": "36b45503-9577-4b7c-81b3-3eb5a16b0741"
    },
    {
      "prioridade": "Urgente",
      "descricao": "aniversario do arga",
      "local": "sim",
      "recursosNecessarios": [
        "rifle da segunda guerra mundial",
        "armadura completa de titânio",
        "garrafa de cavalo branco cheia"
      ],
      "dataLimite": "2025-12-21T10:58",
      "matricula": "2025304046",
      "id": "5245cb03-33dc-46e5-bfa2-53eb36f9a04c"
    },
    {
      "prioridade": "Urgente",
      "descricao": "teste",
      "local": "teste",
      "recursosNecessarios": [
        "teste1",
        "teste2",
        "teste3"
      ],
      "dataLimite": "2025-12-19T11:01",
      "matricula": "2025304046",
      "id": "e9709dbb-6e26-4ab7-a077-491bcee06d08"
    },
    {
      "prioridade": "Urgente",
      "descricao": "teste",
      "local": "teste",
      "recursosNecessarios": [
        "teste1",
        "teste2",
        "teste3"
      ],
      "dataLimite": "2025-12-19T11:01",
      "matricula": "2025304046",
      "id": "2c3e13f1-294b-4c3d-bba6-6716d73263e3"
    },
    {
      "prioridade": "Urgente",
      "descricao": "aniversario do arga",
      "local": "sim",
      "recursosNecessarios": [
        "rifle da segunda guerra mundial",
        "armadura completa de titânio",
        "garrafa de cavalo branco cheia"
      ],
      "dataLimite": "2025-12-16T11:04",
      "matricula": "2025304046",
      "id": "6be51f52-caad-4723-add9-664081aa8dae"
    },
    {
      "prioridade": "Normal",
      "descricao": "Teste",
      "local": "Teste",
      "recursosNecessarios": "Teste,Teste",
      "dataLimite": "2025-12-04T23:59",
      "matricula": "124214121",
      "id": "ca5e2bed-72b4-42bc-9408-ebb9fc59b979"
    },
    {
      "prioridade": "Baixa",
      "descricao": "Teste2",
      "local": "Teste2",
      "recursosNecessarios": "Teste2,Test2",
      "dataLimite": "2025-12-04 23:59:00",
      "matricula": "45363463",
      "id": "7c286077-d456-4c29-b932-651fba30ad76"
    },
    {
      "prioridade": "Normal",
      "descricao": "a",
      "local": "a",
      "recursosNecessarios": [
        "a",
        "b",
        "c"
      ],
      "dataLimite": "2025-12-19T16:05",
      "matricula": "2025304046",
      "id": "b2d2de6c-73ca-4a4e-a00f-898b8af27033"
    }
];

async function fakeFetch(url, options = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const method = options.method || "GET";
            const storedData = localStorage.getItem("tarefas_db");
            let data = storedData ? JSON.parse(storedData) : INITIAL_DATA;

            if (!storedData) {
                localStorage.setItem("tarefas_db", JSON.stringify(INITIAL_DATA));
            }

            if (method === "GET") {
                resolve({
                    json: async () => data
                });
            } else if (method === "POST") {
                const newTask = JSON.parse(options.body);
                data.push(newTask);
                localStorage.setItem("tarefas_db", JSON.stringify(data));
                resolve({
                    json: async () => newTask
                });
            }
        }, 300); 
    });
}



document.addEventListener("DOMContentLoaded", () => {

    let recursos = [];

    const inputRecurso = document.getElementById("inputRecurso");
    const botaoAdd = document.getElementById("addRecurso");
    const listaRecursos = document.getElementById("listaRecursos");

    if (botaoAdd) {
        botaoAdd.addEventListener("click", () => {
            const texto = inputRecurso.value.trim();
            if (texto === "") return;

            recursos.push(texto);

            const li = document.createElement("li");
            li.textContent = texto;

            listaRecursos.appendChild(li);
            inputRecurso.value = "";
        });
    }

    const form = document.getElementById("formTarefa");

    if (form) {
        form.addEventListener("submit", async e => {
            e.preventDefault();

            const tarefa = {
                descricao: document.getElementById("descricao").value,
                local: document.getElementById("local").value,
                matricula: document.getElementById("matricula").value,
                prioridade: document.getElementById("prioridade").value,
                dataLimite: document.getElementById("dataLimite").value,
                recursosNecessarios: recursos
            };

            try {
                await fakeFetch("http://fake-api/tarefas", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tarefa)
                });
                window.location.href = "index.html";
            } catch (error) {
                console.error("Erro ao cadastrar tarefa:", error);
                alert("Erro ao cadastrar tarefa.");
            }
        });
    }

    mostrarTarefas();
});


async function mostrarTarefas() {
    const container = document.getElementById("containerTarefas");
    if (!container) return;

    container.innerHTML = "<p>Carregando tarefas...</p>";

    try {
        const response = await fakeFetch("http://fake-api/tarefas");
        const lista = await response.json();

        container.innerHTML = "";

        if (lista.length === 0) {
            container.innerHTML = `<p class="sem-tarefas">Nenhuma tarefa cadastrada.</p>`;
            return;
        }

        lista.forEach(tarefa => {
            const card = document.createElement("div");
            card.classList.add("task-card");
            
            const descricao = tarefa.descricao || tarefa.conteudo || "Sem descrição";
            const recursos = tarefa.recursosNecessarios || tarefa.recursos || [];
            
            let recursosFormatados = "Nenhum";
            if (Array.isArray(recursos) && recursos.length > 0) {
                recursosFormatados = recursos.map(r => {
                    if (typeof r === 'string') return r;
                    if (typeof r === 'object' && r.nome) return r.nome;
                    if (Array.isArray(r)) return r.join(" ");
                    return JSON.stringify(r);
                }).join(", ");
            } else if (typeof recursos === 'string') {
                recursosFormatados = recursos;
            }

            card.innerHTML = `
                <p><strong class="${tarefa.prioridade === "Urgente" ? "urgente" : ""}">
                    ${tarefa.prioridade || "Sem prioridade"}
                </strong></p>

                <p><strong>Descrição:</strong> ${descricao}</p>
                <p><strong>Local:</strong> ${tarefa.local || "Não informado"}</p>
                <p><strong>Matrícula:</strong> ${tarefa.matricula || "Não informada"}</p>
                <p><strong>Data Limite:</strong> ${tarefa.dataLimite || tarefa.data || "Não informada"}</p>

                <p><strong>Recursos:</strong> ${recursosFormatados}</p>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        container.innerHTML = `<p class="sem-tarefas">Erro ao carregar tarefas.</p>`;
    }
}
