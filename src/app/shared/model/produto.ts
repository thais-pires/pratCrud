export class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;

    constructor() {
        this._id = 0;
        this._nome = '';
        this._preco = 0;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(value: number) {
        this._preco = value;
    }
}
