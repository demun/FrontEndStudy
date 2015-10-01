(수정중입니다)

The CSS3 background-size property allows you to specify the size of background images.
배경 이미지의 사이즈를 설정

Before CSS3, the size of a background image was the actual size of the image. CSS3 allows us to re-use background images in different contexts.

The size can be specified in lengths, percentages, or by using one of the two keywords: contain or cover.
http://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size
The two other possible values for background-size are contain and cover.
The contain keyword scales the background image to be as large as possible (but both its width and its height must fit inside the content area). As such, depending on the proportions of the background image and the background positioning area, there may be some areas of the background which are not covered by the background image.
The cover keyword scales the background image so that the content area is completely covered by the background image (both its width and height are equal to or exceed the content area). As such, some parts of the background image may not be visible in the background positioning area.
The following example illustrates the use of contain and cover:

http://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size_contain
http://superkts.com/css/background-size

