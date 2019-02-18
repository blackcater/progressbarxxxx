#!/usr/bin/env node

try {
  require('../lib/index');
} catch (e) {
  require('../src/index');
}
