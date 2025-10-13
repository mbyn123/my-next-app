'use server'
import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addSnippet = async (prevState: { message: string }, formData: FormData) => {
    'use server'
    const name = formData.get("name");
    const code = formData.get("code");
    console.log(name, code);
    if (!name || !code) {
        return {
            ...prevState,
            message: 'name or code is empty',
        }
    }
    if (typeof name !== 'string' || typeof code !== 'string') {
        return {
            ...prevState,
            message: 'name or code is not string',
        }
    }
    if (name.length < 3) {
        return {
            ...prevState,
            message: 'name is too short',
        }
    }
    if (name.length > 20) {
        return {
            ...prevState,
            message: 'name is too long',
        }
    }
    if (code.length > 1000) {
        return {
            ...prevState,
            message: 'code is too long',
        }
    }
    // throw new Error('error')
    const res = await prisma.snippets.create({
        data: {
            name: name as string,
            code: code as string,
        },
    })
    // console.log('新增成功', res)
    revalidatePath('/')
    redirect('/')

};

export const getSnippets = async () => {
    const res = await prisma.snippets.findMany()
    // console.log('获取成功', res)
    return res
}

export const getSnippet = async (id: string) => {

    const res = await prisma.snippets.findUnique({
        where: {
            id: +id,
        },
    })
    // console.log('获取成功', res)
    return res
}

export const deleteSnippet = async (id: string) => {
    const res = await prisma.snippets.delete({
        where: {
            id: +id,
        },
    })
    // console.log('删除成功', res)
    revalidatePath('/')
    redirect('/')
}


export const updateSnippet = async (id: string, name: string, code: string) => {
    const res = await prisma.snippets.update({
        where: {
            id: +id,
        },
        data: {
            name: name as string,
            code: code as string,
        },
    })
    // console.log('更新成功', res)
    revalidatePath('/')
    redirect('/')
}