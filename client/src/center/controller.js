candidatos = { "jojoy" : 0, "piedad" : 0, "reyes" : 0 };
totales = {};
jQuery.extend({
    Controller: function(model, view){
        /**
         * Escucha a la vista
         */
        var vlistener = $.ViewListener({
            viewLoadData : function(){
            }
        });
        view.addListener(vlistener);

        /**
         * listen to the model
         */
        var mlist = $.ModelListener({
            onLoadBegin : function(){                
            },
            onLoadEnd : function(info){
		view.createTable(info);
            }
        });
        model.addListener(mlist);
    }
});