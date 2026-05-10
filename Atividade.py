class Fazenda:
    def __init__(self, nome, area):
        self.nome = nome
        self.area = area


class Talhao(Fazenda):
    def __init__(self, nome_fazenda, area_fazenda, nome_talhao, area_talhao):
        super().__init__(nome_fazenda, area_fazenda)  # herda atributos da fazenda
        self.nome_talhao = nome_talhao
        self.area_talhao = area_talhao

    def mostrar_dados(self):
        print(f"Fazenda: {self.nome}")
        print(f"Talhão: {self.nome_talhao}")
        print(f"Área do Talhão: {self.area_talhao} hectares")

#-------------------------------------------

t1 = Talhao("Fazenda Boa Vista", 1000, "Talhão A", 150)

t1.mostrar_dados()
