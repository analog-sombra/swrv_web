import { ZodError, ZodSchema } from "zod";

type ActionError<T> = Partial<Record<keyof T, string>>;

export async function validationAction<T,>({ request, schema }: { request: Request, schema: ZodSchema }) {

    const body = Object.fromEntries(await request.formData());
    try {
        const formData = schema.parse(body) as T;
        return { formData, errors: null };
    } catch (e) {
        const errors = e as ZodError<T>;
        console.log(e);
        return {
            formData: body, errors: errors.issues.reduce((acc: ActionError<T>, curr) => {
                const key = curr.path[0] as keyof T;
                acc[key] = curr.message;
                return acc;
            }, {})
        };
    }
}

export function ValidateEmail(mail: string): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    return (false);
}