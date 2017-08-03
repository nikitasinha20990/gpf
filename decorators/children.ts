﻿import {MetaUtils} from "nodedata/core/metadata/utils";
import {DecoratorType} from 'nodedata/core/enums/decorator-type';
import {Decorators} from './decorators';

export function children(params?: any) {
    return function (target: Object, propertyKey: string) {
        //console.log('field - propertyKey: ', propertyKey, ', target:', target);
        MetaUtils.addMetaData(target,
            {
                decorator: Decorators.CHILDREN,
                decoratorType: DecoratorType.PROPERTY,
                params: params,
                propertyKey: propertyKey
            });
    }
}