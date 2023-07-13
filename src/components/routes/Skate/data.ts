interface TreeNode {
   name: string
   children?: TreeNode[]
   link?: string
}

function createTrick(name: string, link: string = '', children: TreeNode[] = []) {
   return {
      name,
      children,
      link,
   }
}

export const tricks = [
   createTrick(
      'ollie',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_8647.MOV?alt=media&token=0029e7e4-7242-4bb5-b10e-afd74aeccbab',
      [
         createTrick(
            'ollie north',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_7640.MOV?alt=media&token=911bd7f8-607d-425a-beec-4c2760151cac',
         ),
         createTrick(
            'kickflip',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_0340.MOV?alt=media&token=642e733a-70ae-4eba-89f1-71c015893194',
            [
               createTrick(
                  'double kickflip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video(1).mov?alt=media&token=1d97fbd4-2423-4e36-af8f-10cf91055235',
               ),
               createTrick(
                  'hospital flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_0634.MOV?alt=media&token=310c4fdd-93d9-4f9b-8649-759f47129c2e',
                  [
                     createTrick(
                        '360 hospital flip',
                        'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_5147%20(1).mp4?alt=media&token=6cc2801e-d5c0-4cbb-94c4-04c4cdfeab36',
                     ),
                     createTrick(
                        'tre hospital flip (i invented this trick)',
                        'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_1678.MOV?alt=media&token=c53a7bc0-6c50-452d-8407-2eb50cb1466a',
                     ),
                  ],
               ),
               createTrick(
                  'dolphin flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_1237.MOV?alt=media&token=a9b30c0c-1c51-4f0d-a817-526d8262ebad',
               ),
               createTrick(
                  'broken ankle flip :D (NSFL)',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video(2).mov?alt=media&token=37b9ffff-46ec-4673-9830-02d20a1f0632',
               ),
            ],
         ),
         createTrick(
            'fs 180',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video.mov?alt=media&token=a7881a13-a792-44b7-8825-95c87eeb7215',
            [
               createTrick(
                  'fakie fs big spin',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video(5).mov?alt=media&token=3dd545f7-65f9-474c-a019-fedaba39424b',
               ),
               createTrick(
                  'fakie fs flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/RPReplay_Final1680424867.mp4?alt=media&token=4581ec8d-1c23-4722-a571-2fcd05a69468',
               ),
               createTrick(
                  'fakie anti fs bigspin',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/RPReplay_Final1689057281.mov?alt=media&token=f084d86f-6983-44e2-8014-685123b8a496',
               ),
               createTrick(
                  'really dumb thing',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/RPReplay_Final1680424896.mp4?alt=media&token=ed7faad6-434c-4687-96a8-433c8f805a2c',
               ),
               createTrick(
                  'totally a fs flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_7705%20(1).mov?alt=media&token=35aad54d-f566-4a16-8212-b9d5f11b94c6',
               ),
            ],
         ),
         createTrick(
            'bs 180',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/8c6344fd76ad42498fe0dbaf7168941d.mov?alt=media&token=d1af42c4-f269-48db-becf-3730deda9d47',
            [
               createTrick(
                  'fakie anti bs bigspin',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/RPReplay_Final1689057281.mp4?alt=media&token=775da9d8-3cb8-40b2-8a48-877889f7fd67',
               ),
            ],
         ),
         createTrick(
            'heelflip',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_4266.mov?alt=media&token=42ef7cee-0658-415b-8710-6a4cda6c28e8',
            [
               createTrick(
                  'ff impossible',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_7380.MOV?alt=media&token=24b33281-59d9-462e-84fb-45608dc08bd1',
               ),
               createTrick(
                  'varial heelflip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_8564.mov?alt=media&token=74067447-06c9-4c79-8434-dad273adf51e',
               ),
               createTrick(
                  'fakie laser flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_5976%20(1).mov?alt=media&token=83d2cbb0-6f8d-4332-8263-65032a76d487',
               ),
            ],
         ),
         createTrick(
            'shuvit',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video%20(1).mov?alt=media&token=0c673968-04fd-47fd-9e14-47c191b089fa',
            [
               createTrick(
                  'varial flip',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/RPReplay_Final1689057196.mp4?alt=media&token=dd3cb635-3b96-4156-b2da-85b893a46908',
               ),
               createTrick(
                  'treflip (i cant treflip)',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_9997%20(2).mov?alt=media&token=94a8f5ba-2bb5-4998-be07-b230bf4dbf52',
               ),
            ],
         ),
         createTrick(
            'fs shuvit',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_8874.MOV?alt=media&token=641b850b-70b0-40a8-ab65-8bd7202c8e17',
            [
               createTrick(
                  'fakie fs 360 pop shuvit',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_9492.MOV?alt=media&token=5448692e-41ae-47b1-b0fc-a65e0ed94e7d',
               ),
               createTrick(
                  'late fs shuv',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video(3).mov?alt=media&token=f37ce321-8ff9-47b5-91de-9f255b33bdcd',
               ),
            ],
         ),
         createTrick(
            'boardslide',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_9980.MOV?alt=media&token=d02d5d1a-fa77-4694-8de5-df0e49012864',
            [
               createTrick(
                  'boardslide to fakie',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/video(4).mov?alt=media&token=5c4b9f9e-8e38-403e-b517-23af9e915074',
               ),
               createTrick(
                  'nosestall body varial to fakie',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_8547%20(1).mov?alt=media&token=662bf6b9-8792-4f6e-bc64-a6ccb9d7cb91',
               ),
            ],
         ),
         createTrick(
            '50-50',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_9947%20(1).mov?alt=media&token=81fe7af4-a36a-4dc5-a0db-f7131f475757',
            [
               createTrick(
                  '50-50 fs shuv out',
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_9948.MOV?alt=media&token=ea1825c0-2340-4e1a-8f43-a974d18d3880',
               ),
            ],
         ),
         createTrick(
            'axle stall',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/IMG_6563%20(1).mov?alt=media&token=c8964fa4-a2c4-410b-8609-1c8752616eeb',
         ),
      ],
   ),
]
