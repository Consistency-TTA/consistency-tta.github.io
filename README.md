## Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation

This is the [official website](https://consistency-tta.github.io) for the paper [*Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation*](https://arxiv.org/abs/2309.10740) by [Yatong Bai](https://bai-yt.github.io), Trung Dang, Dung Tran, Kazuhito Koishida, and Somayeh Sojoudi.

The webpage includes a [demo page](https://consistency-tta.github.io/demo.html) and an example [human evaluation form](https://consistency-tta.github.io/evaluation.html).

The training and inference code will be added soon.


### Main experiment result

Our method reduce the computation of the core step of diffusion-based text-to-audio generation by a factor of 400, while observing minimal performance degradation in terms of Fréchet Audio Distance (FAD), Fréchet Distance (FD), KL Divergence, and CLAP Scores.

|                              | # queries (↓) | CLAP<sub>T</sub> (↑) | CLAP<sub>A</sub> (↑) | FAD (↓) | FD (↓) | KLD (↓) |
|------------------------------|---------------|----------------------|----------------------|---------|--------|---------|
| Diffusion (Baseline)         | 400           | 24.57                | 72.79                | 1.908   | 19.57  | 1.350   |
| Consistency + CLAP FT (Ours) | 1             | 24.69                | 72.54                | 2.406   | 20.97  | 1.358   |
| Consistency (Ours)           | 1             | 22.50                | 72.30                | 2.575   | 22.08  | 1.354   |

[This benchmark](https://paperswithcode.com/sota/audio-generation-on-audiocaps) demonstrates how our single-step models stack up with previous methods, most of which mostly require hundreds of generation steps.


### Cite our work (BibTeX)

```bibtex
@article{bai2023accelerating,
  title={Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation},
  author={Bai, Yatong and Dang, Trung and Tran, Dung and Koishida, Kazuhito and Sojoudi, Somayeh},
  journal={arXiv preprint arXiv:2309.10740},
  year={2023}
}
```
