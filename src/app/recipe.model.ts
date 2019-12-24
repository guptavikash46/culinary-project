export class Recipe{
    name: string;
    desc: string;
    imageUrl: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.desc =desc;
        this.imageUrl = imagePath;
    }
}