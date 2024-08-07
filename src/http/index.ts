import httpEnum from "@/enums/http/httpEnum";
import type ICategoria from "@/interfaces/ICategoria";
import axios from "axios";

export async function obterCategorias() {
    const url = httpEnum.API_URL_CATEGORIES;

    const categorias = get<ICategoria[]>(url);
    
    return categorias as Promise<ICategoria[]>;
}

export async function obterReceitas() {
    const url = httpEnum.API_URL_RECIPES;

    const receitas = get<ICategoria[]>(url);
    
    return receitas as Promise<ICategoria[]>;
}

async function get<T>(url: string): Promise<T> {
    axios.defaults.baseURL = url;
    
    const response = await axios.get(url);

    return response.data as T;
}
