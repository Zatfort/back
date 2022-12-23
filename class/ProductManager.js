class ProductManager{
    constructor(filepath){
    this.filepath =filepath;
    }
    
    async #readfile(){
        try{
            const content =await fs.promises(this.filepath, "utf-8");
            const parseContent = JSON.parse(content);
            return parseContent;
        }catch (error){
            console.log(error);
        }
    }

async #checkProductcode(code){
    const fileContent = await this.#readfile();
    return fileContent.find((obj) => obj.code ===code)
}


    async getProducts() {
     const fileContent = await this.#readFile();
        try{
            if (fileContent.lentgh --- 0) throw new Error("Not products found!");
            else console.log(fileContent);
        }catch (error){
            console.log("Not products found!");
        }
    }

    async addProduct(obj){
      const fileContent = await this.#readfile();
      if (await this.#checkProductcode(obj.code)) return console.log(`Product with code ${obj.code} not found!`)

      try{
        if (fileContent.length !== 0) await fs.promises.writeFile(this.filepath, JSON.stringify([...fileContent,{...obj, id: fileContent[fileContent.length -1].id + 1}], null, 2),'utf-8')
        else await fs.promises.writeFile(this.filepath, JSON.stringify([{...obj, id: 1}]), 'utf-8')
      }catch (error){
        console.log(error)
      }
    }

    async getProductById(id){
        try{
            const fileContent = await this.#readfile()
            if(!fileContent.find((obj) => obj.id ===id)) throw new error (`Product with id ${obj.id} not found!`)
            else console.log(fileContent.find((obj) => obj.id ===id))
        }catch{
            console.log(`Product with ${id} not found!`)
        }
    }
}

module.exports = ProductManager;