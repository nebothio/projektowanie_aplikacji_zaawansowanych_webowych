class TodoEntry{
    id: number;
    title: string;
    description?: string;
    isDone?: boolean;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
    render(){
        return `
        <div class="card card-body mt-1 shadow">
            <p class="smallś">id: ${this.id}</p>
            <p>tytul: ${this.title}</p>
        </div>
        `
    }
}