var APP_DATA = {
  "scenes": [
    {
      "id": "0-bubblevalley_1",
      "name": "bubblevalley_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.024857311925408965,
          "pitch": -0.29292652220543225,
          "rotation": 3.141592653589793,
          "target": "1-bubblevalley"
        },
        {
          "yaw": -0.32773546456830793,
          "pitch": -0.2780614721185337,
          "rotation": 3.141592653589793,
          "target": "2-lufthof-von-arbeitsplatz"
        },
        {
          "yaw": -0.5749099037194263,
          "pitch": -0.10726104699569738,
          "rotation": 3.141592653589793,
          "target": "3-arbeitsplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.392318654038716,
          "pitch": 0.23280555811574644,
          "title": "Bubblevalley",
          "text": "<p class=\"p1\" style=\"text-align: justify; font: 400 11px &quot;Maison Neue Light&quot;; color: rgb(0, 0, 0);\">Kann man den idealen Arbeitsplatz mit kulturellen Räumen verbinden?</p><p class=\"p1\" style=\"text-align: justify; font: 400 11px &quot;Maison Neue Light&quot;; color: rgb(0, 0, 0);\">‘Bubblevalley’ ist die figurale Verknüpfung zwischen Arbeit und Kultur. Die zwei unterschiedlichen Formen\\Figuren zeigen die Nutzung der jeweiligen Räume. Die Besucher können die Kultur in Bubblevalley genießen und die Arbeiter haben<span class=\"Apple-converted-space\">&nbsp;</span>einen abwechslungsreichen Ausblick.<span class=\"Apple-converted-space\">&nbsp;</span></p><p class=\"p1\" style=\"text-align: justify; font: 400 11px &quot;Maison Neue Light&quot;; color: rgb(0, 0, 0);\">Einen langweiligen Augenblick gibt’s hier nicht mehr!</p>"
        }
      ]
    },
    {
      "id": "1-bubblevalley",
      "name": "Bubblevalley",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10900777823335339,
          "pitch": -0.45472316109217026,
          "rotation": 4.71238898038469,
          "target": "2-lufthof-von-arbeitsplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7435912315520596,
          "pitch": -0.28443920726726013,
          "title": "Bubblevalley",
          "text": "<p class=\"p1\" style=\"text-align: justify; font: 400 12px &quot;Maison Neue&quot;; color: rgb(0, 0, 0);\">Es ist ein Gebäude, in dem der Arbeitsplatz und der kulturelle Raum miteinander verbunden sind.Der Zugang des Besuchers vom kulturellen Raum ist frei und der Kontakt zwischen den Arbeitern im Büro und den Besuchern ist indirekt. Die beiden Programme (Büro und Kulturräume) unterscheiden sich in Formen/ Figuren und auch die Eingänge sind unterschiedlich gestaltet. Als kulturelle Räume gibt es ein Theater, Bibliothek und Kinos. Die kulturellen Teile des Gebäudes bestehen aus einer Bubble-Form, die jeweils unterschiedliche Höhen und Größen annehmen. Direkt nach dem Eingang zum Kulturraum wird zuerst der Bubblevalley erfahren, welcher durch die Fassade der Kulturräume geschaffen wird. Lediglich durch eine Rolltreppe in der Lobby ist es möglich, die erste Etage zu betreten. Die Bibliothek hat das größte Volumen der kulturellen Räume und ist aus zwei Richtungen zugänglich durch beide Rolltreppen. Die Erschließung erfolgt innerhalb der Bibliothek durch einen Aufzug neben dem runden Oberlicht. Zwei Kinos bieten Platz für 224 bzw. 152 Personen.</p>"
        }
      ]
    },
    {
      "id": "2-lufthof-von-arbeitsplatz",
      "name": "Lufthof von Arbeitsplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3762055070158343,
          "pitch": 0.083469483167665,
          "rotation": 0,
          "target": "3-arbeitsplatz"
        },
        {
          "yaw": -0.08909365551249415,
          "pitch": -0.6057119807310016,
          "rotation": 4.71238898038469,
          "target": "1-bubblevalley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-arbeitsplatz",
      "name": "Arbeitsplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.37257040610433023,
          "pitch": -3.2650149250912364e-10,
          "rotation": 0,
          "target": "2-lufthof-von-arbeitsplatz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bubblevalley",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
