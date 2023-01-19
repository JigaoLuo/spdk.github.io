var bdev__module_8h =
[
    [ "spdk_bdev_module", "structspdk__bdev__module.html", "structspdk__bdev__module" ],
    [ "__bdev_module_internal_fields", "structspdk__bdev__module_1_1____bdev__module__internal__fields.html", "structspdk__bdev__module_1_1____bdev__module__internal__fields" ],
    [ "spdk_bdev_fn_table", "structspdk__bdev__fn__table.html", "structspdk__bdev__fn__table" ],
    [ "spdk_bdev_name", "structspdk__bdev__name.html", "structspdk__bdev__name" ],
    [ "spdk_bdev_alias", "structspdk__bdev__alias.html", "structspdk__bdev__alias" ],
    [ "spdk_bdev", "structspdk__bdev.html", "structspdk__bdev" ],
    [ "__bdev_internal_fields", "structspdk__bdev_1_1____bdev__internal__fields.html", "structspdk__bdev_1_1____bdev__internal__fields" ],
    [ "__bdev_internal_claim", "unionspdk__bdev_1_1____bdev__internal__fields_1_1____bdev__internal__claim.html", "unionspdk__bdev_1_1____bdev__internal__fields_1_1____bdev__internal__claim" ],
    [ "__bdev_internal_claim_v1", "structspdk__bdev_1_1____bdev__internal__fields_1_1____bdev__internal__claim_1_1____bdev__internal__claim__v1.html", "structspdk__bdev_1_1____bdev__internal__fields_1_1____bdev__internal__claim_1_1____bdev__internal__claim__v1" ],
    [ "spdk_bdev_io", "structspdk__bdev__io.html", "structspdk__bdev__io" ],
    [ "__bdev_io_internal_fields", "structspdk__bdev__io_1_1____bdev__io__internal__fields.html", "structspdk__bdev__io_1_1____bdev__io__internal__fields" ],
    [ "spdk_bdev_part", "structspdk__bdev__part.html", "structspdk__bdev__part" ],
    [ "bdev_part_internal_fields", "structspdk__bdev__part_1_1bdev__part__internal__fields.html", "structspdk__bdev__part_1_1bdev__part__internal__fields" ],
    [ "spdk_bdev_part_channel", "structspdk__bdev__part__channel.html", "structspdk__bdev__part__channel" ],
    [ "SPDK_BDEV_IO_NUM_CHILD_IOV", "bdev__module_8h.html#a36b1251a53c5fea31509ef414c4beb24", null ],
    [ "SPDK_BDEV_MODULE_REGISTER", "bdev__module_8h.html#af0e282f580c2bdda343c0421892e9d2a", null ],
    [ "SPDK_BDEV_RESET_IO_DRAIN_RECOMMENDED_VALUE", "bdev__module_8h.html#a5201c4fcaef3b8f7c850a2d6eaaf84a5", null ],
    [ "spdk_bdev_for_each_io_cb", "bdev__module_8h.html#a72a8f679f4e45f3431ea7e450cb3ed7e", null ],
    [ "spdk_bdev_get_current_qd_cb", "bdev__module_8h.html#ade4b64b36884d88964fc53a4bf65b993", null ],
    [ "spdk_bdev_io_fn", "bdev__module_8h.html#ab66511c6f3db7abcaecdea0536fc6067", null ],
    [ "spdk_bdev_io_get_aux_buf_cb", "bdev__module_8h.html#a78a004a98b02f2d1b2346b6b25e1c945", null ],
    [ "spdk_bdev_io_get_buf_cb", "bdev__module_8h.html#a2562fbcad733a35efaca67e9fb53a382", null ],
    [ "spdk_bdev_part_base_free_fn", "bdev__module_8h.html#ad226e52efa62c0b31340be538000d1a8", null ],
    [ "spdk_bdev_unregister_cb", "bdev__module_8h.html#aaf30cdcd20a84d898099dd35bbfa3590", null ],
    [ "spdk_bdev_claim_type", "bdev__module_8h.html#a925d6b2ad6ebe5de21a0ef80271c5919", [
      [ "SPDK_BDEV_CLAIM_NONE", "bdev__module_8h.html#a925d6b2ad6ebe5de21a0ef80271c5919a03bb225d6b1117f2e51935a0460994e3", null ],
      [ "SPDK_BDEV_CLAIM_EXCL_WRITE", "bdev__module_8h.html#a925d6b2ad6ebe5de21a0ef80271c5919a57e1235cb4553faad33f9b8389881f4b", null ]
    ] ],
    [ "spdk_bdev_io_status", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93", [
      [ "SPDK_BDEV_IO_STATUS_AIO_ERROR", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93ae6ecaeb0839ed289f85ec9a92ff53d35", null ],
      [ "SPDK_BDEV_IO_STATUS_ABORTED", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93aa7e7c5c151a858b09de01627b63cf2ca", null ],
      [ "SPDK_BDEV_IO_STATUS_FIRST_FUSED_FAILED", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93a63b7c72cf0b1bb0bd969e50da64d46c5", null ],
      [ "SPDK_BDEV_IO_STATUS_MISCOMPARE", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93a8cf0b3df0de6126ba841779d6dcdf9bd", null ],
      [ "SPDK_BDEV_IO_STATUS_NOMEM", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93ac500ae7baaa5db4ace3bb92481e30ccb", null ],
      [ "SPDK_BDEV_IO_STATUS_SCSI_ERROR", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93adce56f58e1dd18d652b459edf9f3bc28", null ],
      [ "SPDK_BDEV_IO_STATUS_NVME_ERROR", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93ae9fd36cc0fcdcb3e37d0e5f1f43f06cc", null ],
      [ "SPDK_BDEV_IO_STATUS_FAILED", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93ab8a07dab1a0f0495f2111b2248c493a0", null ],
      [ "SPDK_BDEV_IO_STATUS_PENDING", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93aab9d44175a13bf0c0e952c8e92a801dd", null ],
      [ "SPDK_BDEV_IO_STATUS_SUCCESS", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93a233937591f5356b7a8bf7836f434f129", null ],
      [ "SPDK_MIN_BDEV_IO_STATUS", "bdev__module_8h.html#aa35cc1485b6ba4351c2fb4fbd7125c93a488e2d6a5be7ee1111bc37ffddf8bf22", null ]
    ] ],
    [ "spdk_bdev_reset_stat_mode", "bdev__module_8h.html#af485be7d8a00412bbfbfc1d2d15d3812", [
      [ "BDEV_RESET_STAT_ALL", "bdev__module_8h.html#af485be7d8a00412bbfbfc1d2d15d3812a58a9acc64bd280252ae4a7b071e536e9", null ],
      [ "BDEV_RESET_STAT_MAXMIN", "bdev__module_8h.html#af485be7d8a00412bbfbfc1d2d15d3812adae1afd564247838e6b92fa533fd2cb3", null ]
    ] ],
    [ "spdk_bdev_add_io_stat", "bdev__module_8h.html#ac58f4c0adedcb11e532740b5ed339dac", null ],
    [ "spdk_bdev_alias_add", "bdev__module_8h.html#af1079eae68fac856b56863f26bc5310f", null ],
    [ "spdk_bdev_alias_del", "bdev__module_8h.html#a96486c7be7952a1665ce6ae977f092ef", null ],
    [ "spdk_bdev_alias_del_all", "bdev__module_8h.html#ae62dae3c4a41154aca74f37864ae82f9", null ],
    [ "spdk_bdev_destruct_done", "bdev__module_8h.html#a8d51d8e113f0dffb1bbe535ea01c495f", null ],
    [ "spdk_bdev_dump_io_stat_json", "bdev__module_8h.html#a7a5cd65df968e2f5be1b2311af3c69ea", null ],
    [ "spdk_bdev_for_each_bdev_io", "bdev__module_8h.html#a5326cf21d1612a39bb3ba660790a8ec6", null ],
    [ "spdk_bdev_get_aliases", "bdev__module_8h.html#a1d08fdcf7c3e636d41028fa7ea55aeb7", null ],
    [ "spdk_bdev_get_current_qd", "bdev__module_8h.html#a35d1bb3f7b96e2e0d90e42f11f8f402d", null ],
    [ "spdk_bdev_io_complete", "bdev__module_8h.html#a3247574caabc2b31796861a10b2c9cab", null ],
    [ "spdk_bdev_io_complete_aio_status", "bdev__module_8h.html#afa76c6d38a121270bbe464117d1044ac", null ],
    [ "spdk_bdev_io_complete_nvme_status", "bdev__module_8h.html#a3341d564a521b3e7874f72fc1390f043", null ],
    [ "spdk_bdev_io_complete_scsi_status", "bdev__module_8h.html#a4271696fa055f456bedb6bdebce25dbd", null ],
    [ "spdk_bdev_io_from_ctx", "bdev__module_8h.html#a1d1a5d28d5d17381f15953cb13a4cc6c", null ],
    [ "spdk_bdev_io_get_aux_buf", "bdev__module_8h.html#a2bfea82499197ef270f7a3f6204ccea8", null ],
    [ "spdk_bdev_io_get_buf", "bdev__module_8h.html#a934c7e96e8bdc0aea6cbcc0f414c71ba", null ],
    [ "spdk_bdev_io_get_io_channel", "bdev__module_8h.html#a65de686e7ddcf8caa6d7fa032e7023c6", null ],
    [ "spdk_bdev_io_get_submit_tsc", "bdev__module_8h.html#aa1338f8303e09792634142f63be39b93", null ],
    [ "spdk_bdev_io_get_thread", "bdev__module_8h.html#ac5d86d9c4c086b2909207e6b7192caae", null ],
    [ "spdk_bdev_io_put_aux_buf", "bdev__module_8h.html#ac3d88717b98b64a59816c8f03fc4b21d", null ],
    [ "spdk_bdev_io_set_buf", "bdev__module_8h.html#a5db22de2bf8ceb0f640e05b92188bff5", null ],
    [ "spdk_bdev_io_set_md_buf", "bdev__module_8h.html#a4137556f7ff39fc2c0e816489f5803c4", null ],
    [ "spdk_bdev_module_claim_bdev", "bdev__module_8h.html#a43188aae62750556bba04f4ddc81fa94", null ],
    [ "spdk_bdev_module_examine_done", "bdev__module_8h.html#ad6ae712eb81a37a739cb82ca474e793b", null ],
    [ "spdk_bdev_module_fini_done", "bdev__module_8h.html#a13dae91c3223ea829a78b979d34018c0", null ],
    [ "spdk_bdev_module_fini_start_done", "bdev__module_8h.html#ac1f7fb72f765ee69d36569ecd5c1420d", null ],
    [ "spdk_bdev_module_init_done", "bdev__module_8h.html#a3a32d238f1617d87d407451e3874f1d1", null ],
    [ "spdk_bdev_module_list_add", "bdev__module_8h.html#acb2fe24ca4c312bc24aa8825189b2c97", null ],
    [ "spdk_bdev_module_list_find", "bdev__module_8h.html#abc619dc4cb58c579a990ee2459a1ac7a", null ],
    [ "spdk_bdev_module_release_bdev", "bdev__module_8h.html#ae57fe12af625d6fd37e92b786ef84e32", null ],
    [ "spdk_bdev_notify_blockcnt_change", "bdev__module_8h.html#a7f2edd5a040a818752112d2cc709efca", null ],
    [ "spdk_bdev_notify_media_management", "bdev__module_8h.html#a82dd20b5702f2f97c1f8eec5cdc6d0d5", null ],
    [ "spdk_bdev_part_base_construct_ext", "bdev__module_8h.html#a2a279a58afa5c5ed8a68820fcea0efaa", null ],
    [ "spdk_bdev_part_base_free", "bdev__module_8h.html#ac496f9870a5626441ef14a073ef5e137", null ],
    [ "spdk_bdev_part_base_get_bdev", "bdev__module_8h.html#aed3ff2400cb02ba0f627000dddee322b", null ],
    [ "spdk_bdev_part_base_get_bdev_name", "bdev__module_8h.html#a65879a433b50a4b3236ba734ab8c4478", null ],
    [ "spdk_bdev_part_base_get_ctx", "bdev__module_8h.html#a01b2b4c60b3a775324f796e6be387015", null ],
    [ "spdk_bdev_part_base_get_desc", "bdev__module_8h.html#aa77a63a1e930928e8900c47354e4f626", null ],
    [ "spdk_bdev_part_base_get_tailq", "bdev__module_8h.html#a38d791accba4b7e734c2968f4f5084cb", null ],
    [ "spdk_bdev_part_base_hotremove", "bdev__module_8h.html#acb0fee3c9c76e322208cf9d40fee152b", null ],
    [ "spdk_bdev_part_construct", "bdev__module_8h.html#a24c1e59da114916f39354813c0e761ee", null ],
    [ "spdk_bdev_part_free", "bdev__module_8h.html#a340bfaab0ee5b3fd754759ad10f2dd4b", null ],
    [ "spdk_bdev_part_get_base", "bdev__module_8h.html#ab31a2224b0b9c1cc5cb6bbd89d4c6453", null ],
    [ "spdk_bdev_part_get_base_bdev", "bdev__module_8h.html#a4fcd275ee1ff302cf8b141286abf424e", null ],
    [ "spdk_bdev_part_get_bdev", "bdev__module_8h.html#aecf8338710d95715ab7c40f31e378e7f", null ],
    [ "spdk_bdev_part_get_offset_blocks", "bdev__module_8h.html#ac824d6bb007d80f33425a6cd81b60ce4", null ],
    [ "spdk_bdev_part_submit_request", "bdev__module_8h.html#a099c43cf183a48d23ec7ddad683da1ae", null ],
    [ "spdk_bdev_part_submit_request_ext", "bdev__module_8h.html#a99132dbf758377bdfcc47140d35c065c", null ],
    [ "spdk_bdev_push_media_events", "bdev__module_8h.html#ae45503dc9070d0d9939eed65447deef3", null ],
    [ "spdk_bdev_register", "bdev__module_8h.html#a5fef71f7761986298bb4aaf345736bb3", null ],
    [ "spdk_bdev_reset_io_stat", "bdev__module_8h.html#af7e0a5a50a01fee8785af7d00b4780aa", null ],
    [ "spdk_bdev_unregister", "bdev__module_8h.html#a3d1fd8c9ecf144593313ea08cdeb8ca2", null ],
    [ "spdk_bdev_unregister_by_name", "bdev__module_8h.html#a1135837fca4f720aa12e09daf04a90eb", null ],
    [ "spdk_scsi_nvme_translate", "bdev__module_8h.html#ace2ce9b49ed9c51ff3c85075321164cc", null ],
    [ "STAILQ_HEAD", "bdev__module_8h.html#a94d1006ca1ddf32201a5463179d35a32", null ],
    [ "TAILQ_HEAD", "bdev__module_8h.html#a400db1b2562970d33d8a9ef9ba8d04ff", null ],
    [ "TAILQ_HEAD", "bdev__module_8h.html#a0da20e00320e2b782d1717c8184d93a3", null ],
    [ "TAILQ_HEAD", "bdev__module_8h.html#a1e12eb0cf1d416b15159529e194908a8", null ]
];