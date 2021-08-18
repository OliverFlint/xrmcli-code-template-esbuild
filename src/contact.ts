class ContactForm {
  static OnLoad = (executionContext: Xrm.Events.EventContext) => {
    const formContext = executionContext.getFormContext();
    formContext.getAttribute("firstname").setValue("XrmCli!");
  };
}
