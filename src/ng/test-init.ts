require('zone.js/dist/zone-node');
require('zone.js/dist/async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/proxy');
import { getTestBed } from '@angular/core/testing';
import { platformServerTesting, ServerTestingModule } from '@angular/platform-server/testing';

getTestBed().initTestEnvironment(
    ServerTestingModule,
    platformServerTesting()
);
