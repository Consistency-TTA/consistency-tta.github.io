# ConsistencyTTA: Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation

This is the [**official website**](https://consistency-tta.github.io) for the paper \
"Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation" \
from Microsoft Applied Science Group and UC Berkeley \
by [Yatong Bai](https://bai-yt.github.io),
[Trung Dang](https://www.microsoft.com/applied-sciences/people/trung-dang),
[Dung Tran](https://www.microsoft.com/applied-sciences/people/dung-tran),
[Kazuhito Koishida](https://www.microsoft.com/applied-sciences/people/kazuhito-koishida),
and [Somayeh Sojoudi](https://people.eecs.berkeley.edu/~sojoudi/).

**[[Preprint Paper](https://arxiv.org/abs/2309.10740)]** &nbsp;&nbsp;&nbsp;&nbsp;
**[[Project Homepage](https://consistency-tta.github.io)]** &nbsp;&nbsp;&nbsp;&nbsp;
**[[Code](https://github.com/Bai-YT/ConsistencyTTA)]** &nbsp;&nbsp;&nbsp;&nbsp;
**[[Model Checkpoints](https://huggingface.co/Bai-YT/ConsistencyTTA)]** &nbsp;&nbsp;&nbsp;&nbsp;
**[[Generation Examples](https://consistency-tta.github.io/demo.html)]**


### Main Experiment results

Our method reduce the computation of the core step of diffusion-based text-to-audio generation by a factor of 400, while observing minimal performance degradation in terms of Fréchet Audio Distance (FAD), Fréchet Distance (FD), KL Divergence, and CLAP Scores.

|                              | # queries (↓) | CLAP<sub>T</sub> (↑) | CLAP<sub>A</sub> (↑) | FAD (↓) | FD (↓) | KLD (↓) |
|------------------------------|---------------|----------------------|----------------------|---------|--------|---------|
| Diffusion (Baseline)         | 400           | 24.57                | 72.79                | 1.908   | 19.57  | 1.350   |
| Consistency + CLAP FT (Ours) | 1             | 24.69                | 72.54                | 2.406   | 20.97  | 1.358   |
| Consistency (Ours)           | 1             | 22.50                | 72.30                | 2.575   | 22.08  | 1.354   |

[This benchmark](https://paperswithcode.com/sota/audio-generation-on-audiocaps) demonstrates how our single-step models stack up with previous methods, most of which mostly require hundreds of generation steps.


### Cite Our Work (BibTeX)

```bibtex
@article{bai2023accelerating,
  title={Accelerating Diffusion-Based Text-to-Audio Generation with Consistency Distillation},
  author={Bai, Yatong and Dang, Trung and Tran, Dung and Koishida, Kazuhito and Sojoudi, Somayeh},
  journal={arXiv preprint arXiv:2309.10740},
  year={2023}
}
```
