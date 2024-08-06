import httpEnum from "@/enums/http/httpEnum";
import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias() {
    const url = httpEnum.API_URL_CATEGORIES;

    const resposta = await fetch(url);
  
    const categorias: ICategoria[] = await resposta.json();
  
    return categorias;
}