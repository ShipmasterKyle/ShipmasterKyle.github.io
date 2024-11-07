#!/bin/laylua
-- LAYLUA-BG
-- Sets a png image as a scaled-to-fit background

png = laylua.cairo_image_surface_create_from_png(arg[2])
if laylua.cairo_surface_status(png) ~= 0 then
	print('Usage: ' .. arg[1] .. ' /full/path/to/image.png')
	return
end
png_w = laylua.cairo_image_surface_get_width(png)
png_h = laylua.cairo_image_surface_get_height(png)

win = laylua.create({ layer = 0, anchor = 0xF })

function win:draw(ctx, layout)
	sx = self.width / png_w
	sy = self.height / png_h
	scale = sx < sy and sx or sy
	laylua.cairo_scale(ctx, scale, scale)
	laylua.cairo_set_source_surface(ctx, png,
		(self.width / scale - png_w)/2.0,
		(self.height / scale - png_h)/2.0)
	laylua.cairo_paint(ctx)
end