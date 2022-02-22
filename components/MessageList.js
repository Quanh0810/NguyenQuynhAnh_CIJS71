class MessageList {
    constructor() {
      this.$container = document.createElement("div");
      this.$container.setAttribute("class", "flex flex-1 bg-blue-500");
      this.$container.textContent = "MessageList";
    }
  
    render() {
      return this.$container;
    }
  }
  
  export default MessageList;