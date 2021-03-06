import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

    @Input() todo;

    constructor() {
    }

    ngOnInit() {
    }

}
