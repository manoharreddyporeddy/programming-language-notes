import assert from 'assert';

import SingletonO from "./singleton-obj"
import SingletonC from "./singleton-class"

function use_singleton_obj() {
    let o1 = SingletonO.getInstance();
    let o2 = SingletonO.getInstance();

    assert.strictEqual(o1, o2);
    console.log('Both are same objects.')
}

function use_singleton_class() {
    let o1 = SingletonC.getInstance();
    let o2 = SingletonC.getInstance();

    assert.strictEqual(o1, o2);
    console.log('Both are same objects.')
}

use_singleton_obj();
use_singleton_class();
