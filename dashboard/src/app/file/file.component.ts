import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
/**
 * importo la classe FileService per gestire le richieste al server
 */
import {FileService} from '../providers/file.service';
import {ActivatedRoute, Router} from '@angular/router';


import {File} from "../object/file";

@Component({
    selector: 'file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.css']
})
/**
 * Componente principale della pagina file
 */
export class FileComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    files: File[];
    private searchTimeOut:any;

    route: ActivatedRoute;

    constructor(private _route: ActivatedRoute, private fileService: FileService, public modal: Modal) {
        this.route = _route;
    }

    /**
     * durante l'inizializzazione del componente
     */
    ngOnInit() {
        // richiamo il metodo per recuperare i dati
        this.getFiles();
    }

    /**
     * ottengo la lista dei domini
     */
    getFiles() {
        // richiamo il provider per
        this.fileService.getList()
            .subscribe(
                files => this.files = files,
                error => this.errorMessage = <any>error);
    }

    baseName(str:string)
    {
        let base = str.substring(str.lastIndexOf('/') + 1);
        if(base.lastIndexOf(".") != -1)
            base = base.substring(0, base.lastIndexOf("."));
        return base;
    }

    openModal(image:string)
    {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body('<img src="'+image+'">')
            .open();
    }
}
