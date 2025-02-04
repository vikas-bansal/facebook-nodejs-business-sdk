/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CatalogItemChannelsToIntegrityStatus from './catalog-item-channels-to-integrity-status';
import HotelRoom from './hotel-room';

/**
 * Hotel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hotel extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      brand: 'brand',
      category: 'category',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      description: 'description',
      guest_ratings: 'guest_ratings',
      hotel_id: 'hotel_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      lowest_base_price: 'lowest_base_price',
      loyalty_program: 'loyalty_program',
      margin_level: 'margin_level',
      name: 'name',
      phone: 'phone',
      sale_price: 'sale_price',
      sanitized_images: 'sanitized_images',
      star_rating: 'star_rating',
      unit_price: 'unit_price',
      url: 'url',
    });
  }

  static get ImageFetchStatus (): Object {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }

  getAugmentedRealitiesMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/augmented_realities_metadata'
    );
  }

  getChannelsToIntegrityStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CatalogItemChannelsToIntegrityStatus,
      fields,
      params,
      fetchFirstPage,
      '/channels_to_integrity_status'
    );
  }

  getHotelRooms (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      HotelRoom,
      fields,
      params,
      fetchFirstPage,
      '/hotel_rooms'
    );
  }

  getVideosMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Hotel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Hotel {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
