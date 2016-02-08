//elso fuggveny negy lehetoseg nyomtatasa, megkerdezi melyiket valasztja visszaadja a szamot,
//txt-ben tarolja a megadott adatokat
//kinyomtatja a txt adatot
function menu () {
    console.log ("1. add ");
    console.log ("2. list");
    console.log ("3. delete");
    console.log ("4. exit");
    var choosen = parseInt(readline("choose-option "))
    //readlineval beolvas konzolrol, a beolvasott stringet parseintel syamma alakitjuk
    return choosen
  }
function add_new_item(input_item) {
    var new_item = readline ("Add a new item: ")
    //readlineval konyolrol beolvasunk egy sort

  function list_items(input_item) {
    //var text = open(input_item, "r")
    //var list = text.readlines()
    //text.close()
    //megnzitini ay input_item filet es beolvasni az y valtozoba ay osszes sorat
    //majd bezarni a filet es foral vegigmgzunk a listan es kiirja konzolra az osszes filet
    for (var i=0; i<list.length; i++) {
      console.log(i, list[i])
    }

function list_delete(input_item) {
    //var text = open(input_item, "r")
    //var list = text.readlines()
    //text.close()
    for (var i=0; i<list.length; i++) {
        console.log(i, list[i])
      }
    var deletelist = parseint(readline("choose deleting part"))
    // del list[deletelist-1]
    //text = open(input_item, "w")
    for (var i=0; i<list.length; i++) {
    //  text.write(line)
    }
    //text.close()


var call_option = -1
while call_option != 4:
    call_option = menu ()
    if call_option == 1:
        add_new_item("to-do-list.txt")
    else if call_option == 2:
        list_items("to-do-list.txt")
    else if call_option == 3:
        list_delete("to-do-list.txt")
