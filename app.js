let form = document.querySelector('form.row');

form.addEventListener('submit', function(e){
      e.preventDefault();
      let todo = form.task.value.trim();
      console.log(todo)
})