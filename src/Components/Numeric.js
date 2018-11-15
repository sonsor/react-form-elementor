import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class Numeric extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'number'
    }
}

export { Numeric }