import pSDrawer from './Drawer';

class pS3DDrawer {
    /** Construct the main pS3DEngine drawer */
    constructor(plotter) {
        this.plotter  = null; // set when loaded in the Plotter class
        this.drawer2D = new pSDrawer(plotter);

        this.stroke       = this.drawer2D.stroke;
        this.strokeWeight = this.drawer2D.strokeWeight;
        this.fill         = this.drawer2D.fill;
        this.beginShape   = this.drawer2D.beginShape;
        this.endShape     = this.drawer2D.endShape;
        this.vertex       = this.drawer2D.vertex;
        this.pop          = this.drawer2D.pop;
        this.push         = this.drawer2D.push;
        this.noStroke     = this.drawer2D.noStroke;
        this.noFill       = this.drawer2D.noFill;
    }

    line(x0, y0, z0, x1, y1, z1) {
        let v0 = this.plotter.computeForXYZ(x0, y0, z0);
        let v1 = this.plotter.computeForXYZ(x1, y1, z1);

        beginShape();
            vertex(v0.x, v0.y, v0.z);
            vertex(v1.x, v1.y, v1.z);
        endShape();

        return this;
    }

    sphere(x, y, z, r) {
        let v0 = this.plotter.computeForXYZ(x, y, z);
        let v1 = this.plotter.computeForXYZ(r, 0, 0);

        push();
            translate(v0.x, v0.y, v0.z);
            sphere(v1.x);
        pop();

        return this;
    }

    cone(x, y, z, r, h) {
        let v0 = this.plotter.computeForXYZ(x, y, z);
        let v1 = this.plotter.computeForXYZ(r, h, 0);

        push();
            translate(v0.x, v0.y, v0.z);
            cone(v1.x, v1.y);
        pop();

        return this;
    }

    box(x, y, z, w, h) {
        let v0 = this.plotter.computeForXYZ(x, y, z);
        let v1 = this.plotter.computeForXYZ(w, h, 0);

        push();
            translate(v0.x, v0.y, v0.z);
            box(v1.x, v1.y);
        pop();

        return this;
    }

    cylinder(x, y, z, r, h) {
        let v0 = this.plotter.computeForXYZ(x, y, z);
        let v1 = this.plotter.computeForXYZ(r, h, 0);

        push();
            translate(v0.x, v0.y, v0.z);
            cylinder(v1.x, v1.y);
        pop();

        return this;
    }

    plane(x, y, z, w, h) {
        let v0 = this.plotter.computeForXYZ(x, y, z);
        let v1 = this.plotter.computeForXYZ(w, h, 0);

        push();
            translate(v0.x, v0.y, v0.z);
            plane(v1.x, v1.y);
        pop();

        return this;
    }




    scale(s) {
        scale(s);
        return this;
    }

    model(m, nm) {
        push();
            scale(-1);
            if (nm)
                normalMaterial();
            model(m);
        pop();
        return this;
    }

    transform(x, y, z) {
        transform(x, y, z);
        return this;
    }
}

export default pS3DDrawer;
