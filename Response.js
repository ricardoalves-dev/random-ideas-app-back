class Response{
  #data;
  #error;
  #total;

  constructor(){
    this.#data = {};
    this.#error = [];
    this.#total = 0;
  }

  set data(data){
    console.log(data);
    this.#data = data;
    Array.isArray(data) ? this.#total = data.length : 1;
  }

  get data(){
    return this.#data;
  }

  set error(error){
    this.#error.push(error);
  }

  get error(){
    return this.#error;
  }

  toJson(){
    return {
      "data": this.#data,
      "error": this.#error,
      "total": this.#total
    }
  }
}

module.exports = Response;