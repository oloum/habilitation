import { Component, OnInit } from '@angular/core';
declare var $ ;

@Component({
  selector: 'app-list-entite',
  templateUrl: './list-entite.component.html',
  styleUrls: ['./list-entite.component.css']
})
export class ListEntiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
        $('#page-length-option1').DataTable({
          'language': {
            "decimal":        "",
            "emptyTable":     "Le tableau des utilisateurs est vide",
            "info":           "Liste des utilisateurs",
            "infoEmpty":      "",
            "infoFiltered":   "",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     5,
            "loadingRecords": "Loading...",
            "processing":     "Processing...",
            "search":         "rechercer:",
            "zeroRecords":    "No matching records found",
            "paginate": {
              "first":      "Première",
              "last":       "Dernière",
              "next":       "Suivante",
              "previous":   "Précédente"
            },
            "aria": {
              "sortAscending":  ": activate to sort column ascending",
              "sortDescending": ": activate to sort column descending"
            }
          },
          'columnDefs': [
            {
              'targets': [0],
              'visible': false,

            }],
          'order': [[0, 'desc']]
        });
      });
  }



}
