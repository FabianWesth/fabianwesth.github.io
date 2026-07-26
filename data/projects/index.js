// Central project list. The ARRAY ORDER below is the order shown on the page.
// To reorder, just move entries around. To add a project, create a sibling
// file (e.g. ./my-project.js), import it here, and add it to the array.
//
// Currently ordered by maturity: Production -> MVP -> Prototype -> (no status).

import pcai from './pcai.js';
import adhere from './adhere.js';
import siteIntelligence from './site-intelligence.js';
import railway from './railway.js';
import tenderfetcher from './tenderfetcher.js';
import vibesliding from './vibesliding.js';
import abai from './abai.js';
import airframe from './airframe.js';
import mcpServer from './mcp-server.js';
import healthAgent from './health-agent.js';
import redaction from './redaction.js';
import deepsc from './deepsc.js';
import radr from './radr.js';
import glomeruli from './glomeruli.js';
import ctSegmentation from './ct-segmentation.js';
import destiny from './destiny.js';
import fortuna from './fortuna.js';

export const projects = [
    // Mature — live products and completed research (ordered by importance / coolness)
    pcai,
    adhere,
    deepsc,
    siteIntelligence,
    railway,
    tenderfetcher,
    radr,
    destiny,
    ctSegmentation,
    glomeruli,
    vibesliding,
    fortuna,
    // Prototype — working proofs-of-concept
    redaction,
    airframe,
    abai,
    healthAgent,
    mcpServer,
];
