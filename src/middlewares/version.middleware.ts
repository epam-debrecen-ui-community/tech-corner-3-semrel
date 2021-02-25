import { IncomingMessage, NextFunction, NextHandleFunction } from 'connect';
import { ServerResponse } from 'http';

/**
 * This higher-order function returns a standard NextHandleFunction
 * to be used as middleware. The returned middleware will attach an
 * X-Api-Version response header which will contain the specified
 * version string given to this function as input parameter.
 *
 * @param   versionNumber
 *          A string, semantically denoting an API version number.
 *
 * @returns  a middleware function which sets the X-Api-Version
 *          response header.
 *
 * @author  attilagyongyosi
 */
export function apiVersionMiddlewareFactory(versionNumber: string): NextHandleFunction {
    return (req: IncomingMessage, res: ServerResponse, next: NextFunction): void => {
        res.setHeader('X-Api-Version', versionNumber);
        next();
    }
}
