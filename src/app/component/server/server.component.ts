import { Component } from "@angular/core";

/**
 * 
 */
@Component({
    /**
     * different type of selector
     */

   
    /**
     * 1.element selector
     */
    // selector:'app-server',


   
    /**
     * attribute selector
     */
    // selector:"[app-server]",

    /**
     * class selector
     */
    selector:".app-server",

    templateUrl:"./server.component.html",
    // styleUrls:["./server.component.css"],
    styles:[
        `
        div{
            color:red;
        }
        h1{
            color:yellow
        }
        `
    ]

})


class ServerComponent {

}


export { ServerComponent}