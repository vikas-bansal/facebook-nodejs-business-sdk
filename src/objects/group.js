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
import Album from './album';
import Event from './event';
import Post from './post';
import LiveVideo from './live-video';
import User from './user';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import AdVideo from './ad-video';

/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      archived: 'archived',
      cover: 'cover',
      created_time: 'created_time',
      description: 'description',
      email: 'email',
      icon: 'icon',
      id: 'id',
      install: 'install',
      link: 'link',
      member_count: 'member_count',
      member_request_count: 'member_request_count',
      name: 'name',
      parent: 'parent',
      permissions: 'permissions',
      privacy: 'privacy',
      purpose: 'purpose',
      subdomain: 'subdomain',
      updated_time: 'updated_time',
      venue: 'venue',
    });
  }

  static get JoinSetting (): Object {
    return Object.freeze({
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE',
      none: 'NONE',
    });
  }
  static get PostPermissions (): Object {
    return Object.freeze({
      value_0: '0',
      value_1: '1',
      value_2: '2',
    });
  }
  static get Purpose (): Object {
    return Object.freeze({
      books: 'BOOKS',
      casual: 'CASUAL',
      close_friends: 'CLOSE_FRIENDS',
      club: 'CLUB',
      couple: 'COUPLE',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      deals: 'DEALS',
      ephemeral: 'EPHEMERAL',
      event_planning: 'EVENT_PLANNING',
      family: 'FAMILY',
      fandom_radar: 'FANDOM_RADAR',
      fantasy_league: 'FANTASY_LEAGUE',
      fitness: 'FITNESS',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      fraternity: 'FRATERNITY',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      high_school_forum: 'HIGH_SCHOOL_FORUM',
      jobs: 'JOBS',
      learning: 'LEARNING',
      mentorship: 'MENTORSHIP',
      music_casa_bundle: 'MUSIC_CASA_BUNDLE',
      neighbors: 'NEIGHBORS',
      none: 'NONE',
      oculus: 'OCULUS',
      parenting: 'PARENTING',
      parents: 'PARENTS',
      project: 'PROJECT',
      real_world: 'REAL_WORLD',
      real_world_at_work: 'REAL_WORLD_AT_WORK',
      restyle: 'RESTYLE',
      school_class: 'SCHOOL_CLASS',
      sorority: 'SORORITY',
      sports: 'SPORTS',
      sports_activity: 'SPORTS_ACTIVITY',
      streamer: 'STREAMER',
      study_group: 'STUDY_GROUP',
      support: 'SUPPORT',
      teammates: 'TEAMMATES',
      theme: 'THEME',
      together_vr: 'TOGETHER_VR',
      travel_planning: 'TRAVEL_PLANNING',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_garden: 'WORK_GARDEN',
      work_guest_group: 'WORK_GUEST_GROUP',
      work_integrity: 'WORK_INTEGRITY',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_recruiting: 'WORK_RECRUITING',
      work_resume_review: 'WORK_RESUME_REVIEW',
      work_social: 'WORK_SOCIAL',
      work_stages: 'WORK_STAGES',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK',
      work_vc_call: 'WORK_VC_CALL',
    });
  }
  static get GroupType (): Object {
    return Object.freeze({
      books: 'BOOKS',
      casual: 'CASUAL',
      close_friends: 'CLOSE_FRIENDS',
      club: 'CLUB',
      couple: 'COUPLE',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      deals: 'DEALS',
      ephemeral: 'EPHEMERAL',
      event_planning: 'EVENT_PLANNING',
      family: 'FAMILY',
      fandom_radar: 'FANDOM_RADAR',
      fantasy_league: 'FANTASY_LEAGUE',
      fitness: 'FITNESS',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      fraternity: 'FRATERNITY',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      high_school_forum: 'HIGH_SCHOOL_FORUM',
      jobs: 'JOBS',
      learning: 'LEARNING',
      mentorship: 'MENTORSHIP',
      music_casa_bundle: 'MUSIC_CASA_BUNDLE',
      neighbors: 'NEIGHBORS',
      none: 'NONE',
      oculus: 'OCULUS',
      parenting: 'PARENTING',
      parents: 'PARENTS',
      project: 'PROJECT',
      real_world: 'REAL_WORLD',
      real_world_at_work: 'REAL_WORLD_AT_WORK',
      restyle: 'RESTYLE',
      school_class: 'SCHOOL_CLASS',
      sorority: 'SORORITY',
      sports: 'SPORTS',
      sports_activity: 'SPORTS_ACTIVITY',
      streamer: 'STREAMER',
      study_group: 'STUDY_GROUP',
      support: 'SUPPORT',
      teammates: 'TEAMMATES',
      theme: 'THEME',
      together_vr: 'TOGETHER_VR',
      travel_planning: 'TRAVEL_PLANNING',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_garden: 'WORK_GARDEN',
      work_guest_group: 'WORK_GUEST_GROUP',
      work_integrity: 'WORK_INTEGRITY',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_recruiting: 'WORK_RECRUITING',
      work_resume_review: 'WORK_RESUME_REVIEW',
      work_social: 'WORK_SOCIAL',
      work_stages: 'WORK_STAGES',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK',
      work_vc_call: 'WORK_VC_CALL',
    });
  }

  deleteAdmins (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  createAdmin (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/admins',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getAlbums (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Album> {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album,
      pathOverride,
    );
  }

  getAttachmentSurfaces (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/attachment_surfaces'
    );
  }

  createAttachmentSurface (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/attachment_surfaces',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getDocs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/docs'
    );
  }

  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFeaturedCards (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/featured_cards'
    );
  }

  createFeaturedCard (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/featured_cards',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Post> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      Post,
      pathOverride,
    );
  }

  getFiles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/files'
    );
  }

  getGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  createGroup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/groups',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo,
      pathOverride,
    );
  }

  deleteMembers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/members',
      params
    );
  }

  createMember (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/members',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getOptedInMembers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/opted_in_members'
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo,
      pathOverride,
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  createShiftSetting (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/shift_settings',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Group {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Group {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
