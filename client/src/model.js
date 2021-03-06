jQuery.extend({
    Model: function(){
        /**
         * referencia a nosotros (truco!!)
         */
        var self = this;
        /**
         * listeners del modelo
         */
        var listeners = new Array();
        /**
         * load lots of data from the server
         * or return data from cache if it's already
         * loaded
         */
        this.getAll = function(key){
            //Se notifican los listeners que estamos
            //haciendo algo
            self.onLoadBegin();
            callback = function(root) {		
                self.onLoadEnd(root);
            }	    	    
            // Leer de google docs
            $.getScript('http://127.0.0.1:9292/center/colombia.json?callback=callback');
        }

        /**
         * Añade un listener
         */
        this.addListener = function(list){
            listeners.push(list);
        }

        /**
         * Función que se llama en los listeners
         * del modelo cuando se empieza a cargar.
         */
        this.onLoadBegin = function(){
            $.each(listeners, function(i){
                listeners[i].onLoadBegin();
            });
        }
        /**
         * Función que se llama en los listeners
         * del modelo cuando se termina de cargar.
         */
        this.onLoadEnd = function(result){
            $.each(listeners, function(i){
                listeners[i].onLoadEnd(result);
            });
        }
    },

    /**
     * Funcion para crear un listener del modelo facilmente.
     */
    ModelListener: function(list) {
        if(!list) list = {};
        return $.extend({
            onLoadBegin : function(){},
            onLoadEnd : function(info){}
        }, list);
    }
});