module.exports = QueryJson;

function QueryJson( jsonData ){
    this.data = jsonData;
}

QueryJson.prototype = {
    start: function(){
        if(typeof this.data === 'undefined'){
            return null;
        }
        this.getData = this.data;
        
        return this;
    },
    get: function() {
        return this.getData;
    },
    where: function( theKey, compare, value ){
        if(Array.isArray(this.getData)){
            var queryData = [];
            for (var i = 0, len = this.getData.length; i < len; i++) {
                var valueFrom = this.getData[i][theKey];
                if(this.check(valueFrom, compare, value)){
                    queryData.push(this.getData[i]);
                }
            }
            this.getData = queryData;
        }
        
        return this;
    },
    select: function( param ){
        this.getData = this.getData[param];
        
        return this;
    },
    check: function (valueFrom, compare, valueTo) {
        switch (compare) {
            case '=':
                return valueFrom == valueTo;
                break;
            case '<':
                return valueFrom < valueTo;
                break;
            default:
                return false;
                break;
        }
    }
}