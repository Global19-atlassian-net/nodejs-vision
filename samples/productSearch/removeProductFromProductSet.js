// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
function main(projectId, location, productId, productSetId) {
  // [START vision_product_search_remove_product_from_product_set]
  async function removeProductFromProductSet() {
    const vision = require('@google-cloud/vision');

    const client = new vision.ProductSearchClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const productSetPath = client.productSetPath(
      projectId,
      location,
      productSetId
    );

    const productPath = client.productPath(projectId, location, productId);

    const request = {
      name: productSetPath,
      product: productPath,
    };

    await client.removeProductFromProductSet(request);
    console.log('Product removed from product set.');
  }
  // [END vision_product_search_remove_product_from_product_set]
  removeProductFromProductSet();
}
main(...process.argv.slice(2));
