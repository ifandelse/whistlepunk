var _ = require( "lodash" );
module.exports = function( postal, config, fount ) {
	config = config || {};
	var log = postal.channel( config.logChannel || "log" );
	var resolver = postal.configuration.resolver.compare.bind( postal.configuration.resolver );
	var Logger = require( "./Logger.js" )( log, resolver );
	var adapters = require( "./configParser" )( log, config, fount );

	function loggerFactory( namespace ) {
		return new Logger( namespace, adapters );
	}

	return loggerFactory;
};
