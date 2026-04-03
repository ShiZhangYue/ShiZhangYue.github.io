---
layout: archive
title: "Research and Publications"
permalink: /publications/
author_profile: true
---

<div class="lang-en-block" markdown="1">

Current Research (Industry)
------
**1. Multi-Agent AI Research Pipeline** — *Bayer Crop Science R&D, 2026–present*
- Architected and deployed a production multi-agent research pipeline using LangGraph and Google ADK, consisting of four specialized agents: literature review, internal knowledge retrieval, cloud data querying, and automated model training.
- Designed the end-to-end agentic workflow to autonomously connect external genomics findings with internal domain knowledge, query relevant datasets from cloud infrastructure, and conduct model training to accelerate the research cycle.

**2. DNA Large Language Model for Crop Phenotype Prediction** — *Bayer Crop Science R&D, 2024–2025*
- Fine-tuned a pre-trained DNA large language model (DNABERT) to analyze high-dimensional genome data (90K features) for corn yield prediction, leveraging transformer architectures to capture complex genetic patterns.
- Developed an end-to-end pipeline for processing large-scale genomic datasets (300K samples), including data querying, quality control, and feature engineering.

**3. Machine Learning for Large-Scale Breeding Analytics** — *Bayer Crop Science R&D, 2023–present*
- Led ML modeling on million-scale datasets, applying GNN, CNN, and ResNet architectures to build end-to-end breeding analytics pipelines delivering actionable genetic improvement recommendations.
- Designed an active learning framework for high-value phenotype data acquisition in crop disease resistance; built ensemble learning models for soybean maturity prediction.

**4. ML Tooling & Infrastructure** — *Bayer Crop Science R&D, 2023–2024*
- Developed and maintained a Python ML library standardizing data processing, feature engineering, and model training workflows across the team.
- Designed scalable data pipelines for querying, transforming, and validating large-scale cloud-hosted datasets for downstream AI/ML applications.

PhD Research
------
The objective of my PhD research was to propose an effective methodological framework to protect and utilize manufacturing data for quality assurance from 3 perspectives: **data quality**, **design quality**, and **process quality**.

**Data quality assurance**: A blockchain-enabled approach for cyber-physical security protection in manufacturing
- Apply blockchain for important file (G-code)/data (stream data) storage using Python. Via mismatch of hash value in blocks, malicious modification on files could be detected timely and accurately.
- Utilize asymmetry encryption method to encrypt files to ciphertext; design a camouflage method to camouflage ciphertext to "data" having similar format with original one, which could reduce risk of unauthorized access on files.

**Design quality assurance**: Hybrid data-driven feature extraction-enabled surface modeling for process design
- Propose a hybrid feature extraction framework which consists of machine learning-based feature and statistics feature.
- Develop a robust convolutional autoencoder to extract low-dimensional features from 3D printing surface with large fraction of outliers, porosities, and shifts.

**Process quality assurance**: Develop machine learning-based methods to enhance the *in-situ* monitoring performance
- Apply LSTM-autoencoder to extract features from vibration signal for both supervised and unsupervised process monitoring.
- Propose a data augmentation method based on Augmented Time Regularized Generative Adversarial Network (ATR-GAN) to generate high-quality anomaly data for classifier training.
- Incorporate knowledge distillation framework in decentralized systems to improve neural network accuracy and training efficiency while preserving data privacy.

Journal Publications – Published
------
1. **Shi, Z.**, Li, Y., & Liu, C\*. (2025). Knowledge Distillation-based Information Sharing for Online Process Monitoring in Decentralized Manufacturing System, *Journal of Intelligent Manufacturing*, 36(3). [[link]](https://doi.org/10.1007/s10845-024-02348-9)
2. Li, Y., Xie, T., Liu, C., & **Shi, Z.**\*. (2024). Pseudo Replay-based Class Continual Learning for Online New Category Anomaly Detection in Additive Manufacturing, *IISE Transactions*. [[link]](https://doi.org/10.1080/24725854.2024.2428642)
3. **Shi, Z.**, Oskolkov, B., Tian, W., Kan, C., & Liu, C\*. (2024). Sensor Data Protection through Integration of Blockchain and Camouflaged Encryption in Cyber-physical Manufacturing Systems. *Journal of Computing and Information Science in Engineering*, 24(7). [[link]](https://doi.org/10.1115/1.4063859)
4. Li, Y., **Shi, Z.**, & Liu, C\*. (2023). Transformer-enabled Generative Adversarial Imputation Network with Selective Generation (SGT-GAIN) for Missing Region Imputation. *IISE Transactions*, 56(9), 975–987. [[link]](https://doi.org/10.1080/24725854.2023.2193257)
5. Xiao, P., **Shi, Z.**, Liu, C., & Hagen, D\*. (2023). Characteristics of Circulating Small Non-Coding RNAs in Plasma and Serum during Human Aging. *Aging Medicine*, 6, 35–48. [[link]](https://doi.org/10.1002/agm2.12241)
6. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C\*. (2022). Hybrid data-driven feature extraction-enabled surface modeling for metal additive manufacturing. *The International Journal of Advanced Manufacturing Technology*, 121(7), 4643–4662. [[link]](https://doi.org/10.1007/s00170-022-09608-z)
7. **Shi, Z.**, Mamun, A. A., Kan, C., Tian, W., & Liu, C\*. (2023). An LSTM-autoencoder based online side channel monitoring approach for cyber-physical attack detection in additive manufacturing. *Journal of Intelligent Manufacturing*, 34, 1815–1831. [[link]](https://doi.org/10.1007/s10845-021-01879-9)
8. **Shi, Z.**, Kan, C., Tian, W., & Liu, C\*. (2021). A Blockchain-based G-code protection approach for cyber-physical security in additive manufacturing. *Journal of Computing and Information Science in Engineering*, 21(4). [[link]](https://doi.org/10.1115/1.4048966)
9. Li, Y., **Shi, Z.**, Liu, C.\*, Tian, W., Kong, Z., & Williams, C. B. (2021). Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for Data Augmentation in Online Process Anomaly Detection. *IEEE Transactions on Automation Science and Engineering*, 19(4), 3338–3355 (Finalist of the Data Challenge Award, QSR Section, INFORMS, 2019). [[link]](https://doi.org/10.1109/TASE.2021.3118635)
10. Yu, S., **Shi, Z.**, Aoun, M., Wu, Y., Fang, T., Fontanier, C., & Xiang, M\*. (2025). Development of KASP markers and genomic prediction for winter hardiness in African Bermudagrass. *Grass Research* (accepted).

Journal Publications – Submitted and In Preparation
------
1. Wang, Z., Li, Y., & **Shi, Z.**\*. (2026). Mutual knowledge sharing for enhancement of bearing anomaly detection in manufacturing process. *IISE Transactions* (under 1st round review).
2. **Shi, Z.**, Wang, Z., & Li, Y\*. (2026). Unsupervised Identification and Replay-based Detection (UIRD) for New Category Anomaly Detection in ECG Signal. *Computers in Biology and Medicine* (under 1st round review).
3. Oskolkov, B., **Shi, Z.**, Tian, W., & Liu, C\*. (2026). Knowledge distillation-empowered domain incremental learning with flexible model selection for smart manufacturing applications. *Journal of Manufacturing Systems* (under 2nd round review).
4. Xiao, P\*., **Shi, Z.**, Ma, S., Ran, J., Guo, A., & Chen, F. (2026). A dataset of comprehensive small non-coding RNA associated with reproductive behavior in poultry. To be submitted to *Journal of Integrative Agriculture*.

Conference Publications
------
1. **Shi, Z.**, Li, Y., & Liu, C\*. (2022). Knowledge Distillation-enabled Multi-stage Incremental Learning for Online Process Monitoring in Advanced Manufacturing. *IEEE International Conference on Data Mining (ICDM) IncrLearn Workshop*. [[link]](https://doi.org/10.1109/ICDMW58026.2022.00154)
2. **Shi, Z.**, Liu, C\*., Kan, C., Tian, W., & Chen, Y. (2021). A Blockchain-Enabled Approach for Online Stream Sensor Data Protection in Cyber-Physical Manufacturing Systems. *ASME IDETC-CIE* (Vol. 85376, p. V002T02A035). [[link]](https://doi.org/10.1115/DETC2021-72023)
3. **Shi, Z.**, Mandal, S., Harimkar, S., & Liu, C\*. (2021). Surface Morphology Analysis Using Convolutional Autoencoder in Additive Manufacturing with Laser Engineered Net Shaping. *Procedia Manufacturing*, 53, 16–23. [[link]](https://doi.org/10.1016/j.promfg.2021.06.005)

</div>

<div class="lang-zh-block" markdown="1">

当前研究（产业）
------
**1. 多智能体AI研究流水线** — *拜耳农作物科学研发，2026年至今*
- 使用LangGraph和Google ADK架构并部署了生产级多智能体研究流水线，包含四个专业智能体：文献综述、内部知识检索、云端数据查询及自动化模型训练。
- 设计端到端智能体工作流，自主连接外部基因组学发现与内部领域知识，查询云端相关数据集并进行模型训练，加速研究周期。

**2. 用于作物表型预测的DNA大语言模型** — *拜耳农作物科学研发，2024–2025年*
- 对预训练DNA大语言模型（DNABERT）进行微调，分析高维基因组数据（9万特征）以预测玉米产量，利用Transformer架构捕捉复杂遗传模式。
- 开发处理大规模基因组数据集（30万样本）的端到端流水线，包括数据查询、质量控制和特征工程。

**3. 面向大规模育种分析的机器学习** — *拜耳农作物科学研发，2023年至今*
- 主导百万级数据集上的ML建模，应用GNN、CNN和ResNet架构构建端到端育种分析流水线，提供可操作的遗传改良建议。
- 设计主动学习框架用于作物抗病性高价值表型数据采集；构建集成学习模型用于大豆成熟期预测。

**4. ML工具链与基础设施** — *拜耳农作物科学研发，2023–2024年*
- 开发并维护Python ML库，标准化团队数据处理、特征工程和模型训练工作流。
- 设计可扩展数据流水线，用于查询、转换和验证大规模云端数据集，支持下游AI/ML应用。

博士研究
------
博士研究目标是提出一套有效的方法论框架，从**数据质量**、**设计质量**和**过程质量**三个维度保护并利用制造数据以实现质量保证。

**数据质量保障**：面向制造业网络物理安全的区块链方案
- 使用Python将区块链应用于重要文件（G-code）/数据（流式数据）的存储，通过检测区块哈希值的不匹配及时识别恶意篡改。
- 设计伪装加密方法，降低未授权访问文件的风险。

**设计质量保障**：面向工艺设计的混合数据驱动特征提取表面建模
- 提出包含机器学习特征与统计特征的混合特征提取框架。
- 开发鲁棒卷积自动编码器，从含有大量离群值、气孔和偏移的3D打印表面中提取低维特征。

**过程质量保障**：开发基于机器学习的方法提升原位监测性能
- 应用LSTM自动编码器提取振动信号特征，用于有监督和无监督过程监控。
- 提出基于增强时序正则化生成对抗网络（ATR-GAN）的数据增强方法，生成高质量异常数据提升监测性能。
- 在去中心化系统中融入知识蒸馏框架，在保护数据隐私的同时提升神经网络精度和训练效率。

期刊论文 – 已发表
------
1. **Shi, Z.**、Li, Y. 与 Liu, C\*. (2025). Knowledge Distillation-based Information Sharing for Online Process Monitoring in Decentralized Manufacturing System. *Journal of Intelligent Manufacturing*, 36(3). [[链接]](https://doi.org/10.1007/s10845-024-02348-9)
2. Li, Y.、Xie, T.、Liu, C. 与 **Shi, Z.**\*. (2024). Pseudo Replay-based Class Continual Learning for Online New Category Anomaly Detection in Additive Manufacturing. *IISE Transactions*. [[链接]](https://doi.org/10.1080/24725854.2024.2428642)
3. **Shi, Z.**、Oskolkov, B.、Tian, W.、Kan, C. 与 Liu, C\*. (2024). Sensor Data Protection through Integration of Blockchain and Camouflaged Encryption in Cyber-physical Manufacturing Systems. *Journal of Computing and Information Science in Engineering*, 24(7). [[链接]](https://doi.org/10.1115/1.4063859)
4. Li, Y.、**Shi, Z.** 与 Liu, C\*. (2023). Transformer-enabled Generative Adversarial Imputation Network with Selective Generation (SGT-GAIN) for Missing Region Imputation. *IISE Transactions*, 56(9), 975–987. [[链接]](https://doi.org/10.1080/24725854.2023.2193257)
5. Xiao, P.、**Shi, Z.**、Liu, C. 与 Hagen, D\*. (2023). Characteristics of Circulating Small Non-Coding RNAs in Plasma and Serum during Human Aging. *Aging Medicine*, 6, 35–48. [[链接]](https://doi.org/10.1002/agm2.12241)
6. **Shi, Z.**、Mandal, S.、Harimkar, S. 与 Liu, C\*. (2022). Hybrid data-driven feature extraction-enabled surface modeling for metal additive manufacturing. *The International Journal of Advanced Manufacturing Technology*, 121(7), 4643–4662. [[链接]](https://doi.org/10.1007/s00170-022-09608-z)
7. **Shi, Z.**、Mamun, A. A.、Kan, C.、Tian, W. 与 Liu, C\*. (2023). An LSTM-autoencoder based online side channel monitoring approach for cyber-physical attack detection in additive manufacturing. *Journal of Intelligent Manufacturing*, 34, 1815–1831. [[链接]](https://doi.org/10.1007/s10845-021-01879-9)
8. **Shi, Z.**、Kan, C.、Tian, W. 与 Liu, C\*. (2021). A Blockchain-based G-code protection approach for cyber-physical security in additive manufacturing. *Journal of Computing and Information Science in Engineering*, 21(4). [[链接]](https://doi.org/10.1115/1.4048966)
9. Li, Y.、**Shi, Z.**、Liu, C.\*、Tian, W.、Kong, Z. 与 Williams, C. B. (2021). Augmented Time Regularized Generative Adversarial Network (ATR-GAN) for Data Augmentation in Online Process Anomaly Detection. *IEEE Transactions on Automation Science and Engineering*, 19(4), 3338–3355（本工作入围INFORMS 2019年会QSR分部数据挑战奖决赛）. [[链接]](https://doi.org/10.1109/TASE.2021.3118635)
10. Yu, S.、**Shi, Z.**、Aoun, M.、Wu, Y.、Fang, T.、Fontanier, C. 与 Xiang, M\*. (2025). Development of KASP markers and genomic prediction for winter hardiness in African Bermudagrass. *Grass Research*（已接收）.

期刊论文 – 在审与在准备中
------
1. Wang, Z.、Li, Y. 与 **Shi, Z.**\*. (2026). Mutual knowledge sharing for enhancement of bearing anomaly detection in manufacturing process. *IISE Transactions*（第一轮审稿中）.
2. **Shi, Z.**、Wang, Z. 与 Li, Y\*. (2026). Unsupervised Identification and Replay-based Detection (UIRD) for New Category Anomaly Detection in ECG Signal. *Computers in Biology and Medicine*（第一轮审稿中）.
3. Oskolkov, B.、**Shi, Z.**、Tian, W. 与 Liu, C\*. (2026). Knowledge distillation-empowered domain incremental learning with flexible model selection for smart manufacturing applications. *Journal of Manufacturing Systems*（第二轮审稿中）.
4. Xiao, P\*.、**Shi, Z.**、Ma, S.、Ran, J.、Guo, A. 与 Chen, F. (2026). A dataset of comprehensive small non-coding RNA associated with reproductive behavior in poultry. 待投稿至 *Journal of Integrative Agriculture*.

会议论文
------
1. **Shi, Z.**、Li, Y. 与 Liu, C\*. (2022). Knowledge Distillation-enabled Multi-stage Incremental Learning for Online Process Monitoring in Advanced Manufacturing. *IEEE国际数据挖掘会议（ICDM）IncrLearn研讨会*. [[链接]](https://doi.org/10.1109/ICDMW58026.2022.00154)
2. **Shi, Z.**、Liu, C\*.、Kan, C.、Tian, W. 与 Chen, Y. (2021). A Blockchain-Enabled Approach for Online Stream Sensor Data Protection in Cyber-Physical Manufacturing Systems. *ASME IDETC-CIE*（Vol. 85376, p. V002T02A035）. [[链接]](https://doi.org/10.1115/DETC2021-72023)
3. **Shi, Z.**、Mandal, S.、Harimkar, S. 与 Liu, C\*. (2021). Surface Morphology Analysis Using Convolutional Autoencoder in Additive Manufacturing with Laser Engineered Net Shaping. *Procedia Manufacturing*, 53, 16–23. [[链接]](https://doi.org/10.1016/j.promfg.2021.06.005)

</div>
