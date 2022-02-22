class ChatInput {
    constructor() {
      this.$container = document.createElement("form");
      this.$container.addEventListener("submit", this.onSubmit);
  
      this.$input = document.createElement("input");
      this.$input.type = "text";
      this.$input.placeholder = "Add your message here";
      this.$input.setAttribute(
        "class",
        "w-full border-indigo-50 px-4 py-2 rounded-full bg-indigo-50"
      );
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      console.log("new message");
    };
  
    render() {
      this.$container.appendChild(this.$input);
      return this.$container;
    }
  }
  
  export default ChatInput;
  
  